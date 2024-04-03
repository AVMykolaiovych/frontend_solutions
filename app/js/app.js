// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
    const expandBtn = document.querySelector(".expand-btn"),
        body = document.querySelector("aside");

    if (expandBtn) {
        expandBtn.addEventListener("click", () => {
            body.classList.toggle("collapsed");
        });
    }

    // Footer
    const year = document.querySelector("#current-year");
    year.innerHTML = new Date().getFullYear();

    // Switch
    const toggleBtn = document.getElementById("toggle-btn");
    const theme = document.querySelector("body");
    let darkMode = localStorage.getItem("dark-mode");

    const enableDarkMode = () => {
        theme.classList.add("dark-mode-theme");
        toggleBtn.classList.remove("dark-mode-toggle");
        localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
        theme.classList.remove("dark-mode-theme");
        toggleBtn.classList.add("dark-mode-toggle");
        localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
        enableDarkMode();
    }

    toggleBtn.addEventListener("click", (e) => {
        darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled") {
            enableDarkMode();
        } else disableDarkMode();
    });
});
