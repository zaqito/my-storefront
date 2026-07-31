"use strict";

(function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const openMenu = () => {
        navLinks.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation");
        menuToggle.textContent = "✕";

        if (!desktopQuery.matches) {
            navLinks.style.maxHeight = `${navLinks.scrollHeight}px`;
        }
    };

    const closeMenu = () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";

        if (!desktopQuery.matches) {
            // Re-lock the exact current height first, so the transition
            // has a real starting point to animate back down from.
            navLinks.style.maxHeight = `${navLinks.scrollHeight}px`;
            requestAnimationFrame(() => {
                navLinks.style.maxHeight = "0px";
            });
        }
    };

    // Once the open transition finishes, release the height cap entirely
    // so content can never end up clipped (e.g. if it changes size later).
    navLinks.addEventListener("transitionend", (event) => {
        if (event.propertyName !== "max-height") return;
        if (navLinks.classList.contains("is-open") && !desktopQuery.matches) {
            navLinks.style.maxHeight = "none";
        }
    });

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
        if (desktopQuery.matches) {
            navLinks.classList.remove("is-open");
            navLinks.style.maxHeight = "";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        }
    });

})();