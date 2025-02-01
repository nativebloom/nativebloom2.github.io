document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu toggle (if needed)
    const mobileMenuButton = document.createElement("button");
    mobileMenuButton.innerText = "☰ Menu";
    mobileMenuButton.classList.add("mobile-menu-button");
    document.querySelector("header").prepend(mobileMenuButton);

    const nav = document.querySelector("nav ul");
    mobileMenuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

    // Scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
