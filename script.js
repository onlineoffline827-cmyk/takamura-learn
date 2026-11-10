
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
        footer1: "© 2026 TAKAMURA LEARN",
        footer2: "Maalin kasta wax cusub baro.",
        language: "🇬🇧 ENGLISH"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage() {
    const t = translations[currentLanguage];
    const path = location.pathname;

    document.querySelector("header p").textContent =
        path.endsWith("dashboard.html") ? t.dashboard : t.slogan;

    const links = document.querySelectorAll("nav a");

    if (path.endsWith("dashboard.html")) {
        const names = ["home", "lessons", "pdf", "ai", "requests", "profile"];
        links.forEach((link, i) => {
            link.textContent = t[names[i]];
        });

        document.querySelector(".hero h2").textContent = t.welcomeStudent;
        document.querySelector(".hero p").textContent = t.dashboardText;

        const cards = document.querySelectorAll(".dashboard-card");
        const titles = [t.lessons, t.pdf, t.ai, t.requests, t.profile];
        const descriptions = [t.lessonsText, t.pdfText, t.aiText, t.requestsText, t.profileText];

        cards.forEach((card, i) => {
            card.querySelector("h3").textContent = titles[i];
            card.querySelector("p").textContent = descriptions[i];
        });

    } else {
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
