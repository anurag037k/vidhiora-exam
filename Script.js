// --- 1. DIRECT HARDCODED QUESTION BANK (50 Questions) ---
let questions = [
    // --- Questions 1–10 ---
    {
        q: "Which Article of the Indian Constitution guarantees the Right to Equality before Law and Equal Protection of Laws?",
        opts: ["Article 14", "Article 19", "Article 21", "Article 32"],
        ans: 0,
        cat: "Fundamental Rights"
    },
    {
        q: "Who is widely recognized as the principal architect or 'Father of the Indian Constitution'?",
        opts: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        ans: 1,
        cat: "Constitutional History"
    },
    {
        q: "The 'Basic Structure Doctrine' limiting Parliament's power to amend the Constitution was established by the Supreme Court in which landmark case?",
        opts: ["Golaknath v. State of Punjab", "Kesavananda Bharati v. State of Kerala", "Minerva Mills v. Union of India", "Maneka Gandhi v. Union of India"],
        ans: 1,
        cat: "Judicial Review & Amendments"
    },
    {
        q: "Which Article of the Constitution was described by Dr. B.R. Ambedkar as 'the heart and soul of the Constitution'?",
        opts: ["Article 12", "Article 19", "Article 21", "Article 32"],
        ans: 3,
        cat: "Constitutional Remedies"
    },
    {
        q: "Protection of Life and Personal Liberty under Article 21 can be curtailed according to procedure established by law, provided such procedure is fair, just, and reasonable, as ruled in which case?",
        opts: ["A.K. Gopalan v. State of Madras", "Maneka Gandhi v. Union of India", "K.S. Puttaswamy v. Union of India", "S.R. Bommai v. Union of India"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Which part of the Indian Constitution contains the Directive Principles of State Policy (DPSP)?",
        opts: ["Part II", "Part III", "Part IV", "Part IV-A"],
        ans: 2,
        cat: "Directive Principles"
    },
    {
        q: "Right to Privacy was explicitly declared as a Fundamental Right under Article 21 by a 9-judge constitutional bench in which year?",
        opts: ["2015", "2017", "2019", "2021"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Which constitutional amendment introduced the Goods and Services Tax (GST) in India?",
        opts: ["99th Amendment Act", "101st Amendment Act", "103rd Amendment Act", "105th Amendment Act"],
        ans: 1,
        cat: "Constitutional Amendments"
    },
    {
        q: "Under Article 360, Proclamation of Financial Emergency can be declared by whom?",
        opts: ["Prime Minister", "Chief Justice of India", "President of India", "Union Finance Minister"],
        ans: 2,
        cat: "Emergency Provisions"
    },
    {
        q: "The procedure for amendment of the Indian Constitution (Article 368) has been borrowed from the constitution of which country?",
        opts: ["United Kingdom", "United States", "South Africa", "Canada"],
        ans: 2,
        cat: "Constitutional Sources"
    },

    // --- Questions 11–20 ---
    {
        q: "Which words were added to the Preamble of the Indian Constitution by the 42nd Constitutional Amendment Act, 1976?",
        opts: ["Sovereign, Socialist, Secular", "Socialist, Secular, Integrity", "Liberty, Equality, Fraternity", "Justice, Liberty, Integrity"],
        ans: 1,
        cat: "Preamble"
    },
    {
        q: "Fundamental Duties (Part IV-A, Article 51A) were incorporated into the Constitution upon the recommendation of which committee?",
        opts: ["Sarkaria Commission", "Swaran Singh Committee", "Punchhi Commission", "Verma Committee"],
        ans: 1,
        cat: "Fundamental Duties"
    },
    {
        q: "How many types of writs are explicitly issued by the Supreme Court under Article 32 and High Courts under Article 226?",
        opts: ["Three", "Four", "Five", "Six"],
        ans: 2,
        cat: "Constitutional Remedies"
    },
    {
        q: "Which writ literally means 'to have the body of' and is used to secure the release of a person detained unlawfully?",
        opts: ["Mandamus", "Certiorari", "Habeas Corpus", "Quo-Warranto"],
        ans: 2,
        cat: "Constitutional Remedies"
    },
    {
        q: "Under Article 72, the pardoning power of the President of India extends to which of the following?",
        opts: ["Punishment by a court martial", "All cases where punishment is death", "All offences against Union laws", "All of the above"],
        ans: 3,
        cat: "Union Executive"
    },
    {
        q: "What is the article number that defines a 'Money Bill' in the Indian Constitution?",
        opts: ["Article 110", "Article 112", "Article 117", "Article 123"],
        ans: 0,
        cat: "Parliamentary Procedure"
    },
    {
        q: "Who has the constitutional authority to summon a joint sitting of both Houses of Parliament under Article 108?",
        opts: ["Prime Minister", "Speaker of Lok Sabha", "President of India", "Chairman of Rajya Sabha"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "Which constitutional body is responsible for conducting elections to Parliament, State Legislatures, and the offices of President and Vice-President?",
        opts: ["Union Public Service Commission", "Election Commission of India", "NITI Aayog", "Delimitation Commission"],
        ans: 1,
        cat: "Constitutional Bodies"
    },
    {
        q: "The Finance Commission of India is constituted under which Article of the Constitution?",
        opts: ["Article 263", "Article 280", "Article 324", "Article 356"],
        ans: 1,
        cat: "Constitutional Bodies"
    },
    {
        q: "The Attorney General for India, the highest law officer of the country, is appointed under which Article?",
        opts: ["Article 75", "Article 76", "Article 148", "Article 165"],
        ans: 1,
        cat: "Union Executive"
    },

    // --- Questions 21–30 ---
    {
        q: "The Comptroller and Auditor General (CAG) of India is appointed by the President and holds office under Article:",
        opts: ["Article 148", "Article 150", "Article 151", "Article 165"],
        ans: 0,
        cat: "Constitutional Bodies"
    },
    {
        q: "National Emergency under Article 352 can be declared on the grounds of war, external aggression, or:",
        opts: ["Financial instability", "Armed rebellion", "Failure of constitutional machinery", "Internal disturbance"],
        ans: 1,
        cat: "Emergency Provisions"
    },
    {
        q: "President's Rule in a State, allowing the Union to take over state governance, is imposed under which Article?",
        opts: ["Article 352", "Article 356", "Article 360", "Article 370"],
        ans: 1,
        cat: "Emergency Provisions"
    },
    {
        q: "The Right to Education (RTE) was made a Fundamental Right for children aged 6 to 14 years by which amendment?",
        opts: ["42nd Amendment", "44th Amendment", "86th Amendment", "91st Amendment"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "Abolition of Untouchability and prohibition of its practice in any form is enshrined under:",
        opts: ["Article 16", "Article 17", "Article 18", "Article 19"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Prohibition of traffic in human beings and forced labor (begar) is prohibited under which Fundamental Right article?",
        opts: ["Article 17", "Article 21", "Article 23", "Article 24"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "Freedom of speech and expression, assembly, association, movement, residence, and profession are guaranteed under:",
        opts: ["Article 14", "Article 19", "Article 21", "Article 25"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Original jurisdiction of the Supreme Court of India to adjudicate federal disputes between the Centre and States is contained in:",
        opts: ["Article 131", "Article 136", "Article 143", "Article 226"],
        ans: 0,
        cat: "Judiciary"
    },
    {
        q: "The advisory jurisdiction enabling the President to seek the opinion of the Supreme Court on questions of law or fact is under:",
        opts: ["Article 131", "Article 137", "Article 143", "Article 226"],
        ans: 2,
        cat: "Judiciary"
    },
    {
        q: "Public Interest Litigation (PIL) in India was pioneered and introduced into the judicial system primarily by which Supreme Court Judge?",
        opts: ["Justice M.C. Chagla", "Justice P.N. Bhagwati", "Justice H.J. Kania", "Justice Y.V. Chandrachud"],
        ans: 1,
        cat: "Judiciary"
    },

    // --- Questions 31–40 ---
    {
        q: "The Anti-Defection Law disqualifying MPs and MLAs on grounds of defection was added by the Tenth Schedule through which amendment?",
        opts: ["42nd Amendment, 1976", "52nd Amendment, 1985", "61st Amendment, 1989", "91st Amendment, 2003"],
        ans: 1,
        cat: "Parliament & Legislature"
    },
    {
        q: "Part XVII of the Indian Constitution deals with Official Languages, spanning which Articles?",
        opts: ["Articles 301 to 307", "Articles 324 to 329", "Articles 343 to 351", "Articles 360 to 365"],
        ans: 2,
        cat: "Official Languages"
    },
    {
        q: "Local self-government (Panchayati Raj institutions) was given constitutional status by which landmark amendment act?",
        opts: ["71st Amendment Act", "73rd Amendment Act", "74th Amendment Act", "97th Amendment Act"],
        ans: 1,
        cat: "Local Government"
    },
    {
        q: "Urban local bodies (Municipalities) were constitutionalized under Part IX-A via which amendment act?",
        opts: ["73rd Amendment Act", "74th Amendment Act", "75th Amendment Act", "91st Amendment Act"],
        ans: 1,
        cat: "Local Government"
    },
    {
        q: "Which constitutional amendment granted constitutional status and protection to Cooperative Societies?",
        opts: ["86th Amendment Act", "91st Amendment Act", "97th Amendment Act", "103rd Amendment Act"],
        ans: 2,
        cat: "Constitutional Amendments"
    },
    {
        q: "The Right to Property was removed from the list of Fundamental Rights and made a legal right under Article 300A by which amendment?",
        opts: ["42nd Amendment Act", "44th Amendment Act", "52nd Amendment Act", "61st Amendment Act"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Freedom of conscience and free profession, practice, and propagation of religion are guaranteed under which Articles?",
        opts: ["Articles 21 to 24", "Articles 25 to 28", "Articles 29 to 30", "Articles 32 to 35"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "Cultural and Educational Rights protecting the interests of minorities are specified under:",
        opts: ["Articles 14 and 15", "Articles 19 and 20", "Articles 29 and 30", "Articles 32 and 226"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "Under Article 75(3), the Council of Ministers shall be collectively responsible to whom?",
        opts: ["The President of India", "The Prime Minister", "The House of the People (Lok Sabha)", "Both Houses of Parliament"],
        ans: 2,
        cat: "Union Executive"
    },
    {
        q: "The ordinance-making power of the President of India when Parliament is not in session is laid down in:",
        opts: ["Article 123", "Article 213", "Article 356", "Article 352"],
        ans: 0,
        cat: "Union Executive"
    },

    // --- Questions 41–50 ---
    {
        q: "The Inter-State Council to coordinate policy between states and the center is established under:",
        opts: ["Article 262", "Article 263", "Article 280", "Article 315"],
        ans: 1,
        cat: "Centre-State Relations"
    },
    {
        q: "Parliamentary privileges of members and committees of Parliament are defined under which Article?",
        opts: ["Article 105", "Article 122", "Article 194", "Article 368"],
        ans: 0,
        cat: "Parliament & Legislature"
    },
    {
        q: "Which article states that laws inconsistent with or in derogation of Fundamental Rights shall be void (Doctrine of Severability/Eclipse)?",
        opts: ["Article 12", "Article 13", "Article 21", "Article 32"],
        ans: 1,
        cat: "Fundamental Rights"
    },
    {
        q: "The voting age for elections to the Lok Sabha and State Legislative Assemblies was reduced from 21 to 18 years by which amendment?",
        opts: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        ans: 2,
        cat: "Elections"
    },
    {
        q: "Which constitutional provision provides for the creation or abolition of Legislative Councils in States?",
        opts: ["Article 168", "Article 169", "Article 170", "Article 171"],
        ans: 1,
        cat: "State Legislature"
    },
    {
        q: "The doctrine establishing that the executive cannot take any action without legislative backing (Rule of Law) is derived from principles associated with:",
        opts: ["A.V. Dicey", "John Locke", "Montesquieu", "Austin"],
        ans: 0,
        cat: "Constitutional Principles"
    },
    {
        q: "Which part of the Constitution deals with the Union Territories?",
        opts: ["Part VII", "Part VIII", "Part IX", "Part X"],
        ans: 1,
        cat: "Union Territories"
    },
    {
        q: "Provisions relating to citizenship in India are contained in Articles:",
        opts: ["1 to 4", "5 to 11", "12 to 35", "36 to 51"],
        ans: 1,
        cat: "Citizenship"
    },
    {
        q: "The concept of 'Procedure Established by Law' in Article 21 was historically adopted from the constitution of:",
        opts: ["United States", "United Kingdom", "Japan", "Australia"],
        ans: 2,
        cat: "Constitutional Sources"
    },
    {
        q: "Which schedule of the Indian Constitution allocates seats in the Rajya Sabha to the States and Union Territories?",
        opts: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
        ans: 3,
        cat: "Schedules of Constitution"
    },
    {
        q: "In which landmark judgment did the Supreme Court hold that the Preamble is an integral part of the Constitution?",
        opts: ["Berubari Union case", "Kesavananda Bharati case", "Kesavananda Bharati & LIC of India case", "Golaknath case"],
        ans: 2,
        cat: "Preamble"
    },
    {
        q: "Which article abolishes titles and forbids the state from conferring any titles except military and academic distinctions?",
        opts: ["Article 16", "Article 17", "Article 18", "Article 19"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "Article 20 of the Constitution provides protection against which of the following?",
        opts: ["Ex-post facto laws", "Double jeopardy", "Self-incrimination", "All of the above"],
        ans: 3,
        cat: "Fundamental Rights"
    },
    {
        q: "Under Article 22, what is the maximum period a person can be detained under preventive detention without obtaining the report of an Advisory Board?",
        opts: ["1 month", "2 months", "3 months", "6 months"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "Which article prohibits the employment of children below the age of 14 years in any factory, mine, or hazardous activities?",
        opts: ["Article 21", "Article 23", "Article 24", "Article 45"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "The writ of 'Certiorari' is issued by a higher court to a lower court or tribunal to do which of the following?",
        opts: ["To command public duty", "To quash an order or transfer a proceeding", "To inquire into the legality of a claim to public office", "To produce a detained person"],
        ans: 1,
        cat: "Constitutional Remedies"
    },
    {
        q: "Which writ is issued to prevent a person from holding a public office to which they are not legally entitled?",
        opts: ["Mandamus", "Habeas Corpus", "Quo-Warranto", "Certiorari"],
        ans: 2,
        cat: "Constitutional Remedies"
    },
    {
        q: "Uniform Civil Code (UCC) for citizens throughout the territory of India is outlined under which Article of the DPSP?",
        opts: ["Article 40", "Article 44", "Article 48", "Article 50"],
        ans: 1,
        cat: "Directive Principles"
    },
    {
        q: "Separation of judiciary from the executive in the public services of the State is directed under which Article?",
        opts: ["Article 48", "Article 49", "Article 50", "Article 51"],
        ans: 2,
        cat: "Directive Principles"
    },
    {
        q: "Promotion of international peace and security is contained in which Article of the Constitution?",
        opts: ["Article 47", "Article 48", "Article 50", "Article 51"],
        ans: 3,
        cat: "Directive Principles"
    },

    // --- Questions 61–70 ---
    {
        q: "During a National Emergency declared under Article 352, which Fundamental Rights cannot be suspended under any circumstances (Articles 359)?",
        opts: ["Articles 14 and 19", "Articles 19 and 21", "Articles 20 and 21", "Articles 21 and 22"],
        ans: 2,
        cat: "Emergency Provisions"
    },
    {
        q: "The 44th Constitutional Amendment Act of 1978 replaced the term 'internal disturbance' under Article 352 with which term?",
        opts: ["Armed rebellion", "Aggression", "Civil war", "Insurrection"],
        ans: 0,
        cat: "Emergency Provisions"
    },
    {
        q: "Who holds the casting vote in the event of a tie in the Rajya Sabha?",
        opts: ["President of India", "Prime Minister", "Vice-President of India (Chairman of Rajya Sabha)", "Deputy Chairman of Rajya Sabha"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "What is the minimum age requirement prescribed by the Constitution for a person to be elected as a member of the Lok Sabha?",
        opts: ["21 years", "25 years", "30 years", "35 years"],
        ans: 1,
        cat: "Parliamentary Procedure"
    },
    {
        q: "What is the minimum age requirement to become a member of the Rajya Sabha?",
        opts: ["21 years", "25 years", "30 years", "35 years"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "The maximum gap allowed between two successive sessions of Parliament according to Article 85 is:",
        opts: ["Three months", "Four months", "Six months", "One year"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "The power to establish a new All-India Service under Article 312 rests with which body?",
        opts: ["Lok Sabha alone", "Rajya Sabha by a two-thirds resolution", "Union Cabinet", "Supreme Court"],
        ans: 1,
        cat: "Parliamentary Procedure"
    },
    {
        q: "Which constitutional amendment lowered the voting age from 21 to 18 years?",
        opts: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        ans: 2,
        cat: "Constitutional Amendments"
    },
    {
        q: "The Ninth Schedule containing laws protected from judicial scrutiny was added to the Constitution by which amendment?",
        opts: ["First Amendment Act, 1951", "Fourth Amendment Act, 1955", "Seventeenth Amendment Act, 1964", "42nd Amendment Act, 1976"],
        ans: 0,
        cat: "Constitutional Amendments"
    },
    {
        q: "Which landmark Supreme Court judgment ruled that constitutional amendments violating the Basic Structure can be struck down?",
        opts: ["Golaknath case", "Kesavananda Bharati case", "Indira Nehru Gandhi case", "Minerva Mills case"],
        ans: 1,
        cat: "Judicial Review & Amendments"
    },

    // --- Questions 71–80 ---
    {
        q: "The collegium system for the appointment of judges to the Supreme Court and High Courts originated from:",
        opts: ["Constitutional text", "Parliamentary statute", "Supreme Court Judges Cases (Three Judges Cases)", "Executive notification"],
        ans: 2,
        cat: "Judiciary"
    },
    {
        q: "At what age do judges of the Supreme Court of India retire?",
        opts: ["60 years", "62 years", "65 years", "No retirement age"],
        ans: 2,
        cat: "Judiciary"
    },
    {
        q: "At what age do judges of the High Courts in India retire?",
        opts: ["60 years", "62 years", "65 years", "70 years"],
        ans: 1,
        cat: "Judiciary"
    },
    {
        q: "Which article guarantees protection of life and personal liberty to citizens and non-citizens alike?",
        opts: ["Article 15", "Article 19", "Article 21", "Article 29"],
        ans: 2,
        cat: "Fundamental Rights"
    },
    {
        q: "The writ of 'Mandamus' can be issued against which of the following?",
        opts: ["A public official refusing to perform statutory duty", "A private individual", "President for official acts", "Governor for official acts"],
        ans: 0,
        cat: "Constitutional Remedies"
    },
    {
        q: "Which schedule of the Constitution deals with the distribution of legislative powers between the Union and the States (Lists I, II, and III)?",
        opts: ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Eighth Schedule"],
        ans: 2,
        cat: "Schedules of Constitution"
    },
    {
        q: "How many languages are officially recognized under the Eighth Schedule of the Indian Constitution?",
        opts: ["18", "20", "22", "24"],
        ans: 2,
        cat: "Schedules of Constitution"
    },
    {
        q: "Provisions relating to the administration of tribal areas in the states of Assam, Meghalaya, Tripura, and Mizoram are found in:",
        opts: ["Fifth Schedule", "Sixth Schedule", "Ninth Schedule", "Tenth Schedule"],
        ans: 1,
        cat: "Schedules of Constitution"
    },
    {
        q: "What is the maximum strength of the Lok Sabha specified by the Constitution?",
        opts: ["500 members", "545 members", "550 members", "552 members"],
        ans: 3,
        cat: "Parliament & Legislature"
    },
    {
        q: "What is the maximum strength of the Rajya Sabha specified by the Constitution?",
        opts: ["238 members", "245 members", "250 members", "260 members"],
        ans: 2,
        cat: "Parliament & Legislature"
    },

    // --- Questions 81–90 ---
    {
        q: "Who presides over joint sittings of both Houses of Parliament?",
        opts: ["President of India", "Chairman of Rajya Sabha", "Speaker of the Lok Sabha", "Prime Minister"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "A bill becomes an Act of Parliament after receiving assent from whom?",
        opts: ["Prime Minister", "Speaker of Lok Sabha", "President of India", "Chief Justice of India"],
        ans: 2,
        cat: "Parliamentary Procedure"
    },
    {
        q: "Which Constitutional Amendment Act is known as the 'Mini-Constitution' of India?",
        opts: ["24th Amendment Act", "42nd Amendment Act", "44th Amendment Act", "86th Amendment Act"],
        ans: 1,
        cat: "Constitutional Amendments"
    },
    {
        q: "Which amendment reversed many of the distortions introduced by the 42nd Amendment Act and restored democratic checks and balances?",
        opts: ["24th Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
        ans: 1,
        cat: "Constitutional Amendments"
    },
    {
        q: "The power of judicial review in India is explicitly reinforced by which Article, making laws inconsistent with Fundamental Rights void?",
        opts: ["Article 13", "Article 32", "Article 136", "Article 226"],
        ans: 0,
        cat: "Judicial Review"
    },
    {
        q: "The writ of 'Prohibition' is issued by a higher court to a lower court to do what?",
        opts: ["To produce a detainee", "To prevent excess of jurisdiction or usurpation of jurisdiction", "To direct performance of public duty", "To test legality of public office"],
        ans: 1,
        cat: "Constitutional Remedies"
    },
    {
        q: "Which article empowers the Supreme Court to complete complete justice in any cause or matter pending before it?",
        opts: ["Article 137", "Article 141", "Article 142", "Article 144"],
        ans: 2,
        cat: "Judiciary"
    },
    {
        q: "The law declared by the Supreme Court is binding on all courts within the territory of India under which Article?",
        opts: ["Article 137", "Article 141", "Article 142", "Article 145"],
        ans: 1,
        cat: "Judiciary"
    },
    {
        q: "Review of its own judgment or order by the Supreme Court is provided under:",
        opts: ["Article 136", "Article 137", "Article 141", "Article 143"],
        ans: 1,
        cat: "Judiciary"
    },
    {
        q: "Which Article grants the President the executive power of the Union?",
        opts: ["Article 52", "Article 53", "Article 74", "Article 75"],
        ans: 1,
        cat: "Union Executive"
    },

    // --- Questions 91–100 ---
    {
        q: "According to Article 74, the President shall act in accordance with the advice of whom?",
        opts: ["The Chief Justice of India", "The Attorney General", "The Council of Ministers headed by the Prime Minister", "The Parliament"],
        ans: 2,
        cat: "Union Executive"
    },
    {
        q: "The impeachment process of the President of India (Article 61) can be initiated in:",
        opts: ["Lok Sabha only", "Rajya Sabha only", "Either House of Parliament", "Supreme Court of India"],
        ans: 2,
        cat: "Union Executive"
    },
    {
        q: "What is the maximum duration for which an ordinance promulgated by the President can remain in force without parliamentary approval?",
        opts: ["Six weeks from reassembly of Parliament", "Six months", "Three months", "One year"],
        ans: 0,
        cat: "Union Executive"
    },
    {
        q: "The Governor of a State is appointed by the President and holds office during the pleasure of the President under:",
        opts: ["Article 153", "Article 155", "Article 156", "Article 160"],
        ans: 2,
        cat: "State Executive"
    },
    {
        q: "The Advocate-General for a State, who is the highest law officer of the state government, is appointed under:",
        opts: ["Article 76", "Article 148", "Article 165", "Article 167"],
        ans: 2,
        cat: "State Executive"
    },
    {
        q: "Which constitutional amendment introduced the National Judicial Appointments Commission (NJAC), later struck down by the Supreme Court?",
        opts: ["91st Amendment", "99th Amendment", "101st Amendment", "103rd Amendment"],
        ans: 1,
        cat: "Judiciary & Amendments"
    },
    {
        q: "Reservation up to 10% for Economically Weaker Sections (EWS) was introduced by which Constitutional Amendment?",
        opts: ["101st Amendment", "102nd Amendment", "103rd Amendment", "104th Amendment"],
        ans: 2,
        cat: "Constitutional Amendments"
    },
    {
        q: "Which Constitutional Amendment extended the reservation of seats for SCs and STs in Lok Sabha and State Assemblies and removed Anglo-Indian reserved seats?",
        opts: ["101st Amendment", "103rd Amendment", "104th Amendment", "105th Amendment"],
        ans: 2,
        cat: "Constitutional Amendments"
    },
    {
        q: "The concept of Public Interest Litigation (PIL) in Indian jurisprudence is a relaxation of which traditional legal principle?",
        opts: ["Res judicata", "Locus standi", "Stare decisis", "Obiter dictum"],
        ans: 1,
        cat: "Judiciary"
    },
    {
        q: "Which article of the Constitution safeguards the freedom of the press as an implicit part of Freedom of Speech and Expression?",
        opts: ["Article 14", "Article 19(1)(a)", "Article 21", "Article 32"],
        ans: 1,
        cat: "Fundamental Rights"
    }
];

let totalQuestions = questions.length;
let userAnswers = new Array(totalQuestions).fill(null);
let userStatus = new Array(totalQuestions).fill('not-visited');
if (totalQuestions > 0) userStatus[0] = 'unanswered';

let currentIndex = 0;
let warnings = 0;
let timeRemaining = 7199; // 120 minutes
let examActive = false;
let phoneDetectionInterval = null;

// Keep Firebase initialized so scores and proctoring violation logs still sync to your admin panel
let db = null;
try {
    if (typeof firebase !== 'undefined') {
        db = firebase.firestore();
    }
} catch (e) {
    console.error("Firebase initialization warning:", e);
}
// --- 2. UI SCREENS HELPER ---
const getScreens = () => ({
    camera: document.getElementById('camera-screen'),
    login: document.getElementById('login-screen'),
    exam: document.getElementById('exam-screen'),
    result: document.getElementById('result-screen'),
    warning: document.getElementById('warning-modal')
});

// --- 3. CAMERA SETUP & INDEPENDENT TRANSITION ---
document.getElementById('request-cam-btn')?.addEventListener('click', async () => {
    const loading = document.getElementById('camera-loading');
    const errorMsg = document.getElementById('camera-error');
    const camBtn = document.getElementById('request-cam-btn');
    
    if (loading) loading.classList.remove('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    if (camBtn) camBtn.classList.add('hidden');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('proctor-video');
        if (video) {
            video.srcObject = stream;
            video.classList.remove('hidden');
        }
        if (loading) loading.classList.add('hidden');
        
        // Immediately reveal the proceed button
        document.getElementById('proceed-to-login')?.classList.remove('hidden');
        
    } catch (err) {
        console.error("Camera access error:", err);
        if (loading) loading.classList.add('hidden');
        if (errorMsg) errorMsg.classList.remove('hidden');
        if (camBtn) camBtn.classList.add('hidden');
    }
});

// ALWAYS active click listener
document.getElementById('proceed-to-login')?.addEventListener('click', () => {
    document.getElementById('camera-screen')?.classList.add('hidden');
    document.getElementById('login-screen')?.classList.remove('hidden');
});

// --- 4. START EXAM (Waits for Firestore questions to resolve) ---
document.getElementById('start-exam-btn')?.addEventListener('click', async () => {
    const nameInput = document.getElementById('candidate-name');
    const uniInput = document.getElementById('candidate-university');
    
    if (!nameInput) {
        alert("Error: Element with id 'candidate-name' not found in HTML!");
        return;
    }
    if (!uniInput) {
        alert("Error: Element with id 'candidate-university' not found in HTML!");
        return;
    }
    
    const name = nameInput.value.trim();
    const university = uniInput.value.trim();
    
    if (!name || !university) {
        alert("Please fill in both your Full Name and University Name.");
        return;
    }
    
    window.candidateEmail = university; 
    
    const displayRoll = document.getElementById('display-roll');
    if (displayRoll) displayRoll.innerText = university;
    
    const loginScreen = document.getElementById('login-screen');
    const examScreen = document.getElementById('exam-screen');
    
    if (loginScreen) loginScreen.style.display = 'none';
    if (examScreen) {
        examScreen.classList.remove('hidden');
        examScreen.style.display = 'flex';
    }
    
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen request failed:", e));
    }
    
    // Ensure questions are fully loaded before rendering grid and first question
    if (questions.length === 0 || totalQuestions === 0) {
        await initializeExamQuestions();
    }
    
    examActive = true;
    initGrid();
    loadQuestion(0);
    startTimer();
    
    setTimeout(initProctoring, 1000); 
});

// --- 5. EXAM NAVIGATION & GRID ---
function initGrid() {
    const grid = document.getElementById('palette-grid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 0; i < totalQuestions; i++) {
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
    if (userStatus[currentIndex] !== 'answered' && userStatus[currentIndex] !== 'marked') {
        userStatus[currentIndex] = userAnswers[currentIndex] !== null ? 'answered' : 'unanswered';
    }
    currentIndex = index;
    if (userStatus[currentIndex] === 'not-visited') userStatus[currentIndex] = 'unanswered';
    
    const q = questions[currentIndex];
    if (!q) return;

    const qNumEl = document.getElementById('q-current-num');
    const qCatEl = document.getElementById('question-category');
    const qTextEl = document.getElementById('question-text');
    
    if (qNumEl) qNumEl.innerText = currentIndex + 1;
    if (qCatEl) qCatEl.innerText = q.cat || "General";
    if (qTextEl) qTextEl.innerText = q.q;
    
    const optsContainer = document.getElementById('options-container');
    if (!optsContainer) return;
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
    if (prevBtn) prevBtn.disabled = currentIndex === 0; 
    updateGridUI(); 
} 

document.getElementById('next-btn')?.addEventListener('click', () => { 
    if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); 
}); 

document.getElementById('prev-btn')?.addEventListener('click', () => { 
    if (currentIndex > 0) loadQuestion(currentIndex - 1); 
}); 

document.getElementById('clear-option-btn')?.addEventListener('click', () => { 
    userAnswers[currentIndex] = null; 
    userStatus[currentIndex] = 'unanswered'; 
    loadQuestion(currentIndex); 
}); 

document.getElementById('mark-review-btn')?.addEventListener('click', () => { 
    userStatus[currentIndex] = 'marked'; 
    updateGridUI(); 
    if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); 
}); 

function updateGridUI() { 
    let counts = { answered: 0, unanswered: 0, marked: 0, 'not-visited': 0 }; 
    for (let i = 0; i < totalQuestions; i++) { 
        counts[userStatus[i]]++; 
        const btn = document.getElementById(`grid-btn-${i}`);
        if (!btn) continue;
        
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border `;
        if (i === currentIndex) btn.className += 'ring-2 ring-white ';
        
        if (userStatus[i] === 'answered') btn.className += 'bg-green-600 border-green-500 text-white';
        else if (userStatus[i] === 'marked') btn.className += 'bg-yellow-600 border-yellow-500 text-white';
        else if (userStatus[i] === 'unanswered') btn.className += 'bg-red-600 border-red-500 text-white';
        else btn.className += 'bg-gray-700 border-gray-600 text-gray-300';
    }
    
    const cAns = document.getElementById('count-answered');
    const cUnans = document.getElementById('count-unanswered');
    const cMarked = document.getElementById('count-marked');
    const cNotVis = document.getElementById('count-not-visited');
    
    if (cAns) cAns.innerText = counts.answered;
    if (cUnans) cUnans.innerText = counts.unanswered;
    if (cMarked) cMarked.innerText = counts.marked;
    if (cNotVis) cNotVis.innerText = counts['not-visited'];
}

function startTimer() {
    const display = document.getElementById('timer-display');
    if (!display) return;
    const intv = setInterval(() => {
        if (!examActive) return clearInterval(intv);
        if (timeRemaining <= 0) {
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

// --- 6. EXAM SUBMISSION & LEADERBOARD SYNC (ROBUST & PATCHED) ---
function submitExam() {
    examActive = false;
    if (phoneDetectionInterval) clearInterval(phoneDetectionInterval);
    
    const screens = getScreens();
    if (screens.exam) screens.exam.classList.add('hidden');
    if (screens.warning) screens.warning.classList.add('hidden');
    if (screens.result) screens.result.classList.remove('hidden');
    
    if (document.fullscreenElement) document.exitFullscreen().catch(e => console.log(e));
    
    const video = document.getElementById('proctor-video');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }

    // Calculate score safely
    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans !== null && questions[idx] && ans === questions[idx].ans) score++;
    });

    const finalScoreEl = document.getElementById('final-score');
    if (finalScoreEl) finalScoreEl.innerText = score;

    // Safely pull candidate details
    const nameInput = document.getElementById('candidate-name');
    const candidateName = nameInput ? nameInput.value.trim() : "Anonymous Candidate";
    const candidateIdentifier = window.candidateEmail || "unknown_university";

    console.log("Submitting exam for:", candidateName, "Score:", score);

    // Save to Firestore with error logging
    if (db) {
        db.collection("exam_results").add({
            name: candidateName,
            email: candidateIdentifier,
            score: score,
            total: totalQuestions,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            console.log("Exam result successfully written to Firestore!");
        })
        .catch(err => {
            console.error("Error saving exam result to Firestore:", err);
            alert("Warning: Could not sync score to cloud database. Check Firebase rules.");
        });
    } else {
        console.error("Firestore database instance (db) is null. Cannot save results.");
    }
}

// Bulletproof submit button click listener
document.getElementById('submit-exam-btn')?.addEventListener('click', () => {
    if (confirm("Are you sure you want to finalize and submit your test?")) {
        submitExam();
    }
});
// --- 7. DUAL-AI PROCTORING LOGIC (FACE & DEVICE DETECTION) ---
let absenceTimer = 0;
let objectDetector = null;

async function initProctoring() {
    const videoElement = document.getElementById('proctor-video');
    if (!videoElement) return console.error("Proctor video element not found");

    if (typeof cocoSsd !== 'undefined') {
        try {
            objectDetector = await cocoSsd.load();
            console.log("Device detection AI loaded.");
            
            phoneDetectionInterval = setInterval(async () => {
                if (!examActive || !objectDetector) return;
                const predictions = await objectDetector.detect(videoElement);
                const phoneDetected = predictions.some(p => p.class === 'cell phone' && p.score > 0.5);
                
                if (phoneDetected) {
                    triggerWarning();
                    captureAndUploadViolationSnapshot("Prohibited Device (Mobile Phone) Detected");
                }
            }, 1500);
        } catch (e) {
            console.error("Failed to load device detection AI:", e);
        }
    }

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
        } catch (err) {
            console.error("Error initializing Face AI:", err);
        }
    }
}

function triggerWarning() { 
    if (!examActive) return; 
    warnings++; 
    
    const warnCount = document.getElementById('warning-count');
    const modalWarnCount = document.getElementById('modal-warning-count');
    
    if (warnCount) warnCount.innerText = `${warnings}/3`;
    if (modalWarnCount) modalWarnCount.innerText = warnings;
    
    const screens = getScreens();
    if (warnings >= 3) {
        alert("Maximum violations reached. Auto-submitting exam.");
        submitExam();
    } else {
        if (screens.warning) screens.warning.classList.remove('hidden');
    }
}

document.getElementById('dismiss-warning-btn')?.addEventListener('click', () => {
    const screens = getScreens();
    if (screens.warning) screens.warning.classList.add('hidden');
    if (document.documentElement.requestFullscreen && examActive) {
        document.documentElement.requestFullscreen().catch(e => console.log(e));
    }
});

// --- 8. STRICT BROWSER CHEAT TRIGGERS ---
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
    if (examActive) {
        e.preventDefault();
        triggerWarning();
    }
});

document.addEventListener('copy', (e) => {
    if (examActive) {
        e.preventDefault();
        triggerWarning();
    }
});

// --- 9. FIRESTORE SNAPSHOT LOGGING ---
function captureAndUploadViolationSnapshot(violationType) {
    if (!db) return;
    
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
            console.error("Firebase Storage failed.", error);
        }
    }, 'image/jpeg', 0.85); 
}