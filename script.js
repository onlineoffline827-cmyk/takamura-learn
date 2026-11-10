const translations = {
    en: {
        slogan: "LEARN • UNDERSTAND • SUCCEED",
        home: "HOME",
        about: "ABOUT",
        login: "STUDENT LOGIN",
        homeTitle: "WELCOME TO TAKAMURA LEARN",
        homeText: "Your learning journey starts here. Discover lessons, study materials and helpful tools.",
        portal: "STUDENT PORTAL",
        aboutTitle: "ABOUT TAKAMURA LEARN",
        aboutText: "TAKAMURA LEARN is an educational platform created to help students learn, understand lessons and improve their knowledge. Our goal is to make learning easier through lessons, PDF books and helpful AI tools.",
        back: "BACK TO HOME",
        loginTitle: "STUDENT LOGIN",
        loginText: "Welcome to the student portal. Enter your email to continue your learning journey.",
        emailLabel: "GMAIL ADDRESS",
        emailPlaceholder: "Enter your Gmail",
        continue: "CONTINUE",
        dashboard: "STUDENT DASHBOARD",
        welcomeStudent: "WELCOME, STUDENT!",
        dashboardText: "Your learning dashboard is ready. Choose a section below and continue learning.",
        lessons: "LESSONS",
        lessonsText: "Explore your lessons.",
        pdf: "PDF LIBRARY",
        pdfText: "Read and download study materials.",
        ai: "AI ASSISTANT",
        aiText: "Get help understanding lessons.",
        requests: "MY REQUESTS",
        requestsText: "Send private requests to the admin.",
        profile: "MY PROFILE",
        profileText: "Manage your account.",
        lessonsTitle: "MY LESSONS",
        englishTitle: "ENGLISH LANGUAGE",
        englishPageText: "Welcome to your English learning classroom.",
grammar: "GRAMMAR",
grammarText: "Learn English grammar.",
vocabulary: "VOCABULARY",
vocabularyText: "Learn new English words.",
reading: "READING",
readingText: "Improve your reading skills.",
exercises: "EXERCISES",
exercisesText: "Practice what you learn.",
        lessonsPageText: "Explore your lessons and improve your knowledge.",
        english: "ENGLISH",
        englishText: "Learn English language.",
        biology: "BIOLOGY",
        biologyText: "Explore the world of biology.",
        physics: "PHYSICS",
        physicsText: "Understand physics concepts.",
        mathematics: "MATHEMATICS",
        mathematicsText: "Improve your mathematics skills.",
        footer1: "© 2026 TAKAMURA LEARN",
        footer2: "Learn something new every day.",
        language: "🇸🇴 SOMALI"
    },

    so: {
        slogan: "BARO • FAHAM • GUULEYSO",
        home: "GURIGA",
        about: "NAGU SAABSAN",
        login: "GAL ARDAY",
        homeTitle: "KU SOO DHAWOW TAKAMURA LEARN",
        homeText: "Safarkaaga waxbarasho halkan ayuu ka bilaabmaa. Hel casharro, agab waxbarasho iyo qalab waxtar leh.",
        portal: "BOGGA ARDAYGA",
        aboutTitle: "KU SAABSAN TAKAMURA LEARN",
        aboutText: "TAKAMURA LEARN waa madal waxbarasho oo loo sameeyay inay ardayda ka caawiso barashada, fahamka casharrada iyo kobcinta aqoontooda. Ujeeddadeennu waa inaan waxbarashada fududeyno annagoo adeegsanayna casharro, buugaag PDF ah iyo qalab AI ah.",
        back: "KU NOQO GURIGA",
        loginTitle: "GALITAANKA ARDAYGA",
        loginText: "Ku soo dhowow bogga ardayda. Geli Gmail-kaaga si aad u sii waddo waxbarashadaada.",
        emailLabel: "CINWAANKA GMAIL",
        emailPlaceholder: "Geli Gmail-kaaga",
        continue: "SII WAD",
        dashboard: "BOGGA ARDAYGA",
        welcomeStudent: "KU SOO DHAWOW, ARDAY!",
        dashboardText: "Boggaaga waxbarasho waa diyaar. Dooro qaybta aad rabto oo sii wad waxbarashada.",
        lessons: "CASHARRADA",
        lessonsText: "Baadh casharradaada.",
        pdf: "MAKTABADDA PDF",
        pdfText: "Akhri oo soo degso agabka waxbarashada.",
        ai: "KAALIYAHA AI",
        aiText: "Hel caawimaad fahamka casharrada.",
        requests: "CODSIYADAYDA",
        requestsText: "Codsi gaar ah u dir maamulka.",
        profile: "ASTAANTAYDA",
        profileText: "Maamul akoonkaaga.",
        lessonsTitle: "CASHARRADAYDA",
        englishTitle: "LUQADDA INGIRIISIGA",
        englishPageText: "Ku soo dhowow fasalkaaga barashada Ingiriisiga.",
grammar: "NAHWAHA",
grammarText: "Baro xeerarka naxwaha Ingiriisiga.",
vocabulary: "ERAYADA",
vocabularyText: "Baro erayo cusub oo Ingiriisi ah.",
reading: "AKHRISKA",
readingText: "Kobci xirfadahaaga akhriska.",
exercises: "LAYLISYADA",
exercisesText: "Ku tababar wixii aad baratay.",
        lessonsPageText: "Baadh casharradaada oo kobci aqoontaada.",
        english: "INGIRIISI",
        englishText: "Baro luqadda Ingiriisiga.",
        biology: "BAYOOLOJI",
        biologyText: "Baro cilmiga noolaha.",
        physics: "FIISIKIS",
        physicsText: "Faham fikradaha fiisigiska.",
        mathematics: "XISAAB",
        mathematicsText: "Kobci xirfadahaaga xisaabta.",
        footer1: "© 2026 TAKAMURA LEARN",
        footer2: "Maalin kasta wax cusub baro.",
        language: "🇬🇧 ENGLISH"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage() {
    const t = translations[currentLanguage];
    const path = location.pathname;
    const links = document.querySelectorAll("nav a");

    if (path.endsWith("dashboard.html")) {
        document.querySelector("header p").textContent = t.dashboard;

        const names = ["home", "lessons", "pdf", "ai", "requests", "profile"];
        links.forEach((link, i) => link.textContent = t[names[i]]);

        document.querySelector(".hero h2").textContent = t.welcomeStudent;
        document.querySelector(".hero p").textContent = t.dashboardText;

        const cards = document.querySelectorAll(".dashboard-card");
        const titles = [t.lessons, t.pdf, t.ai, t.requests, t.profile];
        const descriptions = [t.lessonsText, t.pdfText, t.aiText, t.requestsText, t.profileText];

        cards.forEach((card, i) => {
            card.querySelector("h3").textContent = titles[i];
            card.querySelector("p").textContent = descriptions[i];
        });

    } else if (path.endsWith("lessons.html")) {
        document.querySelector("header p").textContent = t.lessons;

        const names = ["home", "lessons", "pdf", "ai", "requests", "profile"];
        links.forEach((link, i) => link.textContent = t[names[i]]);

        document.querySelector(".hero h2").textContent = t.lessonsTitle;
        document.querySelector(".hero p").textContent = t.lessonsPageText;

        const cards = document.querySelectorAll(".dashboard-card");
        const titles = [t.english, t.biology, t.physics, t.mathematics];
        const descriptions = [t.englishText, t.biologyText, t.physicsText, t.mathematicsText];

        cards.forEach((card, i) => {
            card.querySelector("h3").textContent = titles[i];
            card.querySelector("p").textContent = descriptions[i];
        });    } else if (path.endsWith("english.html")) {
        document.querySelector("header p").textContent = t.english;

        const names = ["home", "lessons", "pdf", "ai", "requests", "profile"];
        links.forEach((link, i) => link.textContent = t[names[i]]);

        document.querySelector(".hero h2").textContent = t.englishTitle;
        document.querySelector(".hero p").textContent = t.englishPageText;

        const cards = document.querySelectorAll(".dashboard-card");
        const titles = [t.grammar, t.vocabulary, t.reading, t.exercises];
        const descriptions = [
            t.grammarText,
            t.vocabularyText,
            t.readingText,
            t.exercisesText
        ];

        cards.forEach((card, i) => {
            card.querySelector("h3").textContent = titles[i];
            card.querySelector("p").textContent = descriptions[i];
        });

    } else {
        document.querySelector("header p").textContent = t.slogan;

        links[0].textContent = t.home;
        links[1].textContent = t.about;
        links[2].textContent = t.login;

        if (path.endsWith("about.html")) {
            document.querySelector(".hero h2").textContent = t.aboutTitle;
            document.querySelector(".hero p").textContent = t.aboutText;
            document.querySelector(".enter-btn").textContent = t.back;

        } else if (path.endsWith("login.html")) {
            document.querySelector(".hero h2").textContent = t.loginTitle;
            document.querySelector(".hero p").textContent = t.loginText;
            document.querySelector("label").textContent = t.emailLabel;
            document.querySelector("#email").placeholder = t.emailPlaceholder;
            document.querySelector(".login-box button").textContent = t.continue;

        } else {
            document.querySelector(".hero h2").textContent = t.homeTitle;
            document.querySelector(".hero p").textContent = t.homeText;
            document.querySelector(".enter-btn").textContent = t.portal;
        }
    }

    const footer = document.querySelectorAll("footer p");
    footer[0].textContent = t.footer1;
    footer[1].textContent = t.footer2;

    document.getElementById("languageBtn").textContent = t.language;
}

document.getElementById("languageBtn").addEventListener("click", function() {
    currentLanguage = currentLanguage === "en" ? "so" : "en";
    localStorage.setItem("language", currentLanguage);
    changeLanguage();
});

changeLanguage();

