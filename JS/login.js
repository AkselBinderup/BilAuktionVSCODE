document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".two-section-container > div");
    const loginContainer = document.querySelector(".login-container");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            sections.forEach(sec => sec.classList.remove("active"));
            section.classList.add("active");
            loginContainer.style.display = "flex";
        });
    });
});