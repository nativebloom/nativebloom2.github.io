document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
//    document.querySelectorAll("nav ul li a").forEach(anchor => {
//        anchor.addEventListener("click", function (e) {
//            e.preventDefault();
//            const targetId = this.getAttribute("href").substring(1);
//            const targetElement = document.getElementById(targetId);
//            if (targetElement) {
//                window.scrollTo({
//                    top: targetElement.offsetTop - 50,
//                    behavior: "smooth"
//                });
//            }
//        });
//    });

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
