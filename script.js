
const translations = {
    en: {
        title: "TAKAMURA LEARN",
        slogan: "LEARN • UNDERSTAND • SUCCEED",
        home: "HOME",
        about: "ABOUT",
        login: "STUDENT LOGIN",
        welcome: "WELCOME TO TAKAMURA LEARN",
        description: "Your learning journey starts here. Discover lessons, study materials and helpful tools.",
        portal: "STUDENT PORTAL",
        footer1: "© 2026 TAKAMURA LEARN",
        footer2: "Learn something new every day.",
        language: "🇸🇴 SOMALI"
    },
    so: {
        title: "TAKAMURA LEARN",
        slogan: "BARO • FAHAM • GUULEYSO",
        home: "GURIGA",
        about: "NAGU SAABSAN",
        login: "GAL ARDAY",
        welcome: "KU SOO DHAWOW TAKAMURA LEARN",
        description: "Safarkaaga waxbarasho halkan ayuu ka bilaabmaa. Hel casharro, agab waxbarasho iyo qalab waxtar leh.",
        portal: "BOGGA ARDAYGA",
        footer1: "© 2026 TAKAMURA LEARN",
        footer2: "Maalin kasta wax cusub baro.",
        language: "🇬🇧 ENGLISH"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage() {
    const t = translations[currentLanguage];

    document.querySelector("header h1").textContent = t.title;
    document.querySelector("header p").textContent = t.slogan;

    const links = document.querySelectorAll("nav a");
    links[0].textContent = t.home;
    links[1].textContent = t.about;
    links[2].textContent = t.login;

    document.querySelector(".hero h2").textContent = t.welcome;
    document.querySelector(".hero p").textContent = t.description;
    document.querySelector(".enter-btn").textContent = t.portal;

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
