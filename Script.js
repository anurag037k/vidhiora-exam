// --- PROCEED TO LOGIN HANDLER ---
document.getElementById('proceed-to-login')?.addEventListener('click', () => {
    // Hide the camera permissions screen
    const cameraScreen = document.getElementById('camera-screen');
    if (cameraScreen) {
        cameraScreen.classList.add('hidden');
    }
    
    // Show the login / registration form screen
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) {
        loginScreen.classList.remove('hidden');
    }
});
// --- 1. LOAD QUESTIONS FROM BANK ---
let questions = JSON.parse(localStorage.getItem('vidhiora_qs') || '[]');
const totalQuestions = 100;

while (questions.length < totalQuestions) {
    questions.push({
        q: `Placeholder Question ${questions.length + 1}. Detailed constitutional law scenario.`,
        opts: ["Option A placeholder", "Option B placeholder", "Option C placeholder", "Option D placeholder"],
        ans: 0,
        cat: "General Constitutional Principles"
    });
}

// --- 2. EXAM STATE VARIABLES ---
let currentIndex = 0;
let userAnswers = new Array(totalQuestions).fill(null);
let userStatus = new Array(totalQuestions).fill('not-visited');
userStatus[0] = 'unanswered';
let warnings = 0;
let timeRemaining = 7199; // 120 minutes
let examActive = false;

// --- 3. UI SCREENS ---
const screens = {
    camera: document.getElementById('camera-screen'),
    login: document.getElementById('login-screen'),
    exam: document.getElementById('exam-screen'),
    result: document.getElementById('result-screen'),
    warning: document.getElementById('warning-modal')
};

/// --- 4. CAMERA SETUP ---
document.getElementById('request-cam-btn').addEventListener('click', async () => {
    const loading = document.getElementById('camera-loading');
    const errorMsg = document.getElementById('camera-error');
    const camBtn = document.getElementById('request-cam-btn');
    
    if(loading) loading.classList.remove('hidden');
    if(errorMsg) errorMsg.classList.add('hidden');
    if(camBtn) camBtn.classList.add('hidden');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('proctor-video');
        video.srcObject = stream;
        video.classList.remove('hidden');
        
        if(loading) loading.classList.add('hidden');
        const proceedBtn = document.getElementById('proceed-to-login');
        if(proceedBtn) proceedBtn.classList.remove('hidden');
    } catch (err) {
        console.error("Camera access error:", err);
        if(loading) loading.classList.add('hidden');
        if(errorMsg) errorMsg.classList.remove('hidden');
        if(camBtn) camBtn.classList.remove('hidden');
    }
});

// --- 5. START EXAM ---
document.getElementById('start-exam-btn')?.addEventListener('click', () => {
    const name = document.getElementById('candidate-name').value.trim();
    const roll = document.getElementById('candidate-roll').value.trim();
    if(!name || !roll) return alert("Please fill in all candidate details.");
    
    window.candidateEmail = roll; 
    
    const displayRoll = document.getElementById('display-roll');
    if(displayRoll) displayRoll.innerText = roll;
    
    screens.login.classList.add('hidden');
    screens.exam.classList.remove('hidden');
    
    if(document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen request failed:", e));
    }
    
    examActive = true;
    initGrid();
    loadQuestion(0);
    startTimer();
    
    setTimeout(initProctoring, 1000); 
});

// --- 6. EXAM NAVIGATION & GRID ---
function initGrid() {
    const grid = document.getElementById('palette-grid');
    if(!grid) return;
    grid.innerHTML = '';
    for(let i=0; i<totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-500`;
        btn.onclick = () => loadQuestion(i);
        btn.id = `grid-btn-${i}`;
        grid.appendChild(btn);
    }
    updateGridUI();
}

function loadQuestion(index) {
    if(userStatus[currentIndex] !== 'answered' && userStatus[currentIndex] !== 'marked') {
        userStatus[currentIndex] = userAnswers[currentIndex] !== null ? 'answered' : 'unanswered';
    }
    currentIndex = index;
    if(userStatus[currentIndex] === 'not-visited') userStatus[currentIndex] = 'unanswered';
    
    const q = questions[currentIndex];
    const qNumEl = document.getElementById('q-current-num');
    const qCatEl = document.getElementById('question-category');
    const qTextEl = document.getElementById('question-text');
    
    if(qNumEl) qNumEl.innerText = currentIndex + 1;
    if(qCatEl) qCatEl.innerText = q.cat;
    if(qTextEl) qTextEl.innerText = q.q;
    
    const optsContainer = document.getElementById('options-container');
    if(!optsContainer) return;
    optsContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    q.opts.forEach((optText, i) => {
        const div = document.createElement('div');
        const isSelected = userAnswers[currentIndex] === i;
        div.className = `p-4 border rounded cursor-pointer transition-colors flex items-center gap-4 ${isSelected ? 'border-gold bg-gold/10' : 'border-gray-600 bg-navy hover:bg-gray-800'}`;
        div.onclick = () => {
            userAnswers[currentIndex] = i;
            userStatus[currentIndex] = 'answered';
            loadQuestion(currentIndex);
        };
        
        const badge = document.createElement('div');
        badge.className = `w-8 h-8 rounded border flex items-center justify-center font-bold text-sm shrink-0 ${isSelected ? 'border-gold text-gold' : 'border-gray-500 text-gray-400'}`; 
        badge.innerText = labels[i]; 
        const text = document.createElement('span'); 
        text.innerText = optText; 
        div.appendChild(badge); 
        div.appendChild(text); 
        optsContainer.appendChild(div); 
    }); 
    
    const prevBtn = document.getElementById('prev-btn');
    if(prevBtn) prevBtn.disabled = currentIndex === 0; 
    updateGridUI(); 
} 

document.getElementById('next-btn')?.addEventListener('click', () => { 
    if(currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); 
}); 

document.getElementById('prev-btn')?.addEventListener('click', () => { 
    if(currentIndex > 0) loadQuestion(currentIndex - 1); 
}); 

document.getElementById('clear-option-btn')?.addEventListener('click', () => { 
    userAnswers[currentIndex] = null; 
    userStatus[currentIndex] = 'unanswered'; 
    loadQuestion(currentIndex); 
}); 

document.getElementById('mark-review-btn')?.addEventListener('click', () => { 
    userStatus[currentIndex] = 'marked'; 
    updateGridUI(); 
    if(currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); 
}); 

function updateGridUI() { 
    let counts = { answered: 0, unanswered: 0, marked: 0, 'not-visited': 0 }; 
    for(let i=0; i<totalQuestions; i++) { 
        counts[userStatus[i]]++; 
        const btn = document.getElementById(`grid-btn-${i}`);
        if(!btn) continue;
        
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border `;
        if(i === currentIndex) btn.className += 'ring-2 ring-white ';
        
        if(userStatus[i] === 'answered') btn.className += 'bg-green-600 border-green-500 text-white';
        else if(userStatus[i] === 'marked') btn.className += 'bg-yellow-600 border-yellow-500 text-white';
        else if(userStatus[i] === 'unanswered') btn.className += 'bg-red-600 border-red-500 text-white';
        else btn.className += 'bg-gray-700 border-gray-600 text-gray-300';
    }
    
    const cAns = document.getElementById('count-answered');
    const cUnans = document.getElementById('count-unanswered');
    const cMarked = document.getElementById('count-marked');
    const cNotVis = document.getElementById('count-not-visited');
    
    if(cAns) cAns.innerText = counts.answered;
    if(cUnans) cUnans.innerText = counts.unanswered;
    if(cMarked) cMarked.innerText = counts.marked;
    if(cNotVis) cNotVis.innerText = counts['not-visited'];
}

function startTimer() {
    const display = document.getElementById('timer-display');
    if(!display) return;
    const intv = setInterval(() => {
        if(!examActive) return clearInterval(intv);
        if(timeRemaining <= 0) {
            clearInterval(intv);
            submitExam();
            return;
        }
        timeRemaining--;
        const h = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
        const m = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
        const s = String(timeRemaining % 60).padStart(2, '0');
        display.innerText = `${h}:${m}:${s}`; 
    }, 1000); 
} 

// --- EXAM SUBMISSION & LEADERBOARD SYNC ---
function submitExam() {
    examActive = false;
    screens.exam.classList.add('hidden');
    screens.warning.classList.add('hidden');
    screens.result.classList.remove('hidden');
    
    if(document.fullscreenElement) document.exitFullscreen().catch(e => console.log(e));
    
    const video = document.getElementById('proctor-video');
    if(video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }

    // Calculate total score
    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if(ans === questions[idx].ans) score++;
    });

    // Save Result to Firestore for Admin Leaderboard
    if (db && window.candidateEmail) {
        db.collection("exam_results").add({
            name: document.getElementById('candidate-name')?.value || "Anonymous",
            email: window.candidateEmail,
            score: score,
            total: totalQuestions,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(err => console.error("Error saving exam result:", err));
    }
}

// --- 8. DUAL-AI PROCTORING LOGIC (FACE & DEVICE DETECTION) ---
let db;
try {
    db = firebase.firestore();
} catch (e) {
    console.error("Firebase Firestore is not initialized.");
}

let absenceTimer = 0;
let objectDetector = null;

async function initProctoring() {
    const videoElement = document.getElementById('proctor-video');
    if(!videoElement) return console.error("Proctor video element not found");

    // 1. Initialize Mobile Phone Detection (COCO-SSD)
    if (typeof cocoSsd !== 'undefined') {
        try {
            objectDetector = await cocoSsd.load();
            console.log("Device detection AI loaded.");
            
            // Scan for phones every 1.5 seconds to save CPU
            phoneDetectionInterval = setInterval(async () => {
                if (!examActive || !objectDetector) return;
                const predictions = await objectDetector.detect(videoElement);
                
                // Check if 'cell phone' is detected with a confidence score > 50%
                const phoneDetected = predictions.some(p => p.class === 'cell phone' && p.score > 0.5);
                
                if (phoneDetected) {
                    triggerWarning();
                    captureAndUploadViolationSnapshot("Prohibited Device (Mobile Phone) Detected");
                }
            }, 1500);
        } catch (e) {
            console.error("Failed to load device detection AI:", e);
        }
    } else {
        console.error("TensorFlow COCO-SSD missing from index.html");
    }

    // 2. Initialize Face Tracking (FaceMesh)
    if (typeof FaceMesh !== 'undefined') {
        try {
            const faceMesh = new FaceMesh({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
            });

            faceMesh.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });

            faceMesh.onResults((results) => {
                if (!examActive) return;

                if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
                    absenceTimer++;
                    if (absenceTimer > 3) { 
                        triggerWarning();
                        captureAndUploadViolationSnapshot("Candidate Face Not Detected / Looking Away");
                        absenceTimer = 0;
                    }
                } else {
                    const landmarks = results.multiFaceLandmarks[0];
                    const leftEar = landmarks[234];
                    const rightEar = landmarks[454];

                    const faceTurnedAway = Math.abs(leftEar.z - rightEar.z) > 0.15;
                    
                    if (faceTurnedAway) {
                        absenceTimer++;
                        if (absenceTimer > 3) {
                            triggerWarning();
                            captureAndUploadViolationSnapshot("Extreme Head Movement Detected");
                            absenceTimer = 0;
                        }
                    } else {
                        absenceTimer = 0; 
                    }
                }
            });

            const camera = new Camera(videoElement, {
                onFrame: async () => {
                    if (examActive) await faceMesh.send({ image: videoElement });
                },
                width: 640,
                height: 480
            });
            camera.start();
            console.log("Face tracking AI initialized successfully.");
        } catch (err) {
            console.error("Error initializing Face AI:", err);
        }
    }
}

function triggerWarning() { 
    if(!examActive) return; 
    warnings++; 
    
    const warnCount = document.getElementById('warning-count');
    const modalWarnCount = document.getElementById('modal-warning-count');
    
    if(warnCount) warnCount.innerText = `${warnings}/3`;
    if(modalWarnCount) modalWarnCount.innerText = warnings;
    
    if(warnings >= 3) {
        alert("Maximum violations reached. Auto-submitting exam.");
        submitExam();
    } else {
        screens.warning.classList.remove('hidden');
    }
}

document.getElementById('dismiss-warning-btn')?.addEventListener('click', () => {
    screens.warning.classList.add('hidden');
    if(document.documentElement.requestFullscreen && examActive) {
        document.documentElement.requestFullscreen().catch(e => console.log(e));
    }
});

// --- 9. BROWSER CHEAT TRIGGERS (STRICT) ---
window.addEventListener("blur", () => {
    if (examActive) {
        triggerWarning();
        captureAndUploadViolationSnapshot("Lost Window Focus / Clicked Outside");
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden && examActive) {
        triggerWarning();
        captureAndUploadViolationSnapshot("Tab Switched / Minimized Window");
    }
});

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && examActive) {
        triggerWarning();
        captureAndUploadViolationSnapshot("Exited Fullscreen Mode");
    }
});

document.addEventListener("keydown", (e) => {
    if (examActive && (e.key === "PrintScreen" || (e.ctrlKey && (e.key === "c" || e.key === "p" || e.key === "s" || e.key === "v")))) {
        e.preventDefault();
        alert("Screenshots and copying are strictly prohibited during the exam!");
        triggerWarning();
        captureAndUploadViolationSnapshot("Attempted Screenshot / Keyboard Shortcut: " + e.key);
    }
});

document.addEventListener('contextmenu', (e) => {
    if(examActive) {
        e.preventDefault();
        triggerWarning();
    }
});

document.addEventListener('copy', (e) => {
    if(examActive) {
        e.preventDefault();
        triggerWarning();
    }
});

// --- 10. FIRESTORE SNAPSHOT LOGGING ---
function captureAndUploadViolationSnapshot(violationType) {
    if (!db) return console.error("Cannot upload violation. Firebase not initialized.");
    
    const videoElement = document.getElementById('proctor-video');
    if (!videoElement) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth || 640;
    canvas.height = videoElement.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
        if (!blob) return;

        try {
            const storageRef = firebase.storage().ref();
            const timestamp = Date.now();
            const candidateId = window.candidateEmail ? window.candidateEmail.replace(/[@.]/g, '_') : 'anonymous';
            const filePath = `violation_snapshots/${candidateId}_${timestamp}.jpg`;
            const imageRef = storageRef.child(filePath);

            imageRef.put(blob).then((snapshot) => {
                return snapshot.ref.getDownloadURL();
            })
            .then((downloadURL) => {
                return db.collection("exam_violations").add({
                    email: window.candidateEmail || "anonymous_candidate",
                    violation: violationType,
                    snapshotUrl: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch((error) => {
                console.error("Error uploading violation snapshot:", error);
            });
        } catch (error) {
            console.error("Firebase Storage failed. Snapshot not saved.", error);
        }
    }, 'image/jpeg', 0.85); 
}
document.getElementById('request-cam-btn')?.addEventListener('click', async () => {
    alert("Button clicked! Attempting to access camera..."); // Test alert
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('proctor-video');
        video.srcObject = stream;
        video.classList.remove('hidden');
    } catch (err) {
        alert("Camera error: " + err.message); // Will show exact error if blocked
    }
});