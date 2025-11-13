// Fade-in animation for sections
const sections = document.querySelectorAll("section");
const revealOptions = { threshold: 0.1 };

const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
    });
}, revealOptions);

sections.forEach((section) => {
    section.classList.add("hidden");
    reveal.observe(section);
});

// Dark mode toggle logic
const toggleBtn = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply saved or system theme
const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", currentTheme);
toggleBtn.textContent = currentTheme === "light" ? "☀️" : "🌙";

// Toggle on click
toggleBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    toggleBtn.textContent = theme === "light" ? "☀️" : "🌙";
});
