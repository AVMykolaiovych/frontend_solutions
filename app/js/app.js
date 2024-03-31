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
});
