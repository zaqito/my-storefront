"use strict";

(function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".site-header");

    const setHeaderHeight = () => {
        if (!header) return;
        document.documentElement.style.setProperty(
            "--header-height",
            `${header.offsetHeight}px`
        );
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    if (!menuToggle || !navLinks) return;

    const openMenu = () => {
        navLinks.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation");
        menuToggle.textContent = "✕";
    };

    const closeMenu = () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.contains("is-open");
        isOpen ? closeMenu() : openMenu();
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });

})();