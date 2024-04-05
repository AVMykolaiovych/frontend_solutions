// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
    const expandBtn = document.querySelector(".expand-btn"),
        body = document.querySelector("aside");

    let activeIndex;

    if (expandBtn) {
        expandBtn.addEventListener("click", () => {
            body.classList.toggle("collapsed");
        });
    }

    const current = window.location.href;
    const allLinks = document.querySelectorAll(".sidebar-links a");

    allLinks.forEach((elem) => {
        elem.addEventListener("click", function () {
            const hrefLinkClick = elem.href;

            allLinks.forEach((link) => {
                if (link.href == hrefLinkClick) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
    });

    const searchInput = document.querySelector(".search__wrapper input");
    searchInput.addEventListener("focus", () => {
        body.classList.remove("collapsed");
    });

    // Footer
    const year = document.querySelector("#current-year");
    year.innerHTML = new Date().getFullYear();

    // Switch
    // const toggleBtn = document.getElementById("toggle-btn");
    // const theme = document.querySelector("body");
    // let darkMode = localStorage.getItem("dark-mode");

    // const enableDarkMode = () => {
    //     theme.classList.add("dark-mode-theme");
    //     toggleBtn.classList.remove("dark-mode-toggle");
    //     localStorage.setItem("dark-mode", "enabled");
    // };

    // const disableDarkMode = () => {
    //     theme.classList.remove("dark-mode-theme");
    //     toggleBtn.classList.add("dark-mode-toggle");
    //     localStorage.setItem("dark-mode", "disabled");
    // };

    // if (darkMode === "enabled") {
    //     enableDarkMode();
    // }

    // toggleBtn.addEventListener("click", (e) => {
    //     darkMode = localStorage.getItem("dark-mode");
    //     if (darkMode === "disabled") {
    //         enableDarkMode();
    //     } else disableDarkMode();
    // });
});
