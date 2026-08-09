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

(function () {

    const toggleBtn = document.querySelector(".timeline-toggle");
    const extraItems = document.querySelectorAll(".timeline-extra");

    if (!toggleBtn || !extraItems.length) return;

    const count = extraItems.length;
    const showLabel = `Show ${count} more experience${count > 1 ? "s" : ""}`;
    const hideLabel = "Show less";

    toggleBtn.textContent = showLabel;

    const openItems = () => {
        extraItems.forEach((item) => {
            item.setAttribute("aria-hidden", "false");
            item.style.maxHeight = `${item.scrollHeight}px`;
        });
    };

    const closeItems = () => {
        extraItems.forEach((item) => {
            // Re-lock the exact current height first, so the transition
            // has a real starting point to animate back down from.
            item.style.maxHeight = `${item.scrollHeight}px`;
            item.setAttribute("aria-hidden", "true");
            requestAnimationFrame(() => {
                item.style.maxHeight = "0px";
            });
        });
    };

    // Once each item's open transition finishes, release its height cap
    // entirely so content can never end up clipped (e.g. text reflow).
    extraItems.forEach((item) => {
        item.addEventListener("transitionend", (event) => {
            if (event.propertyName !== "max-height") return;
            if (item.getAttribute("aria-hidden") === "false") {
                item.style.maxHeight = "none";
            }
        });
    });

    toggleBtn.addEventListener("click", () => {
        const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

        isExpanded ? closeItems() : openItems();

        toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
        toggleBtn.textContent = isExpanded ? showLabel : hideLabel;
    });

})();

(function () {

    const toggleButtons = document.querySelectorAll(".project-card-toggle");

    if (!toggleButtons.length) return;

    toggleButtons.forEach((toggleBtn) => {
        const details = document.getElementById(toggleBtn.getAttribute("aria-controls"));
        if (!details) return;

        const showLabel = "Read more";
        const hideLabel = "Read less";

        const open = () => {
            details.style.maxHeight = `${details.scrollHeight}px`;
        };

        const close = () => {
            // Re-lock the exact current height first, so the transition
            // has a real starting point to animate back down from.
            details.style.maxHeight = `${details.scrollHeight}px`;
            requestAnimationFrame(() => {
                details.style.maxHeight = "0px";
            });
        };

        // Once the open transition finishes, release the height cap
        // entirely so content can never end up clipped (e.g. text reflow).
        details.addEventListener("transitionend", (event) => {
            if (event.propertyName !== "max-height") return;
            if (toggleBtn.getAttribute("aria-expanded") === "true") {
                details.style.maxHeight = "none";
            }
        });

        toggleBtn.addEventListener("click", () => {
            const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

            isExpanded ? close() : open();

            toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
            toggleBtn.textContent = isExpanded ? showLabel : hideLabel;
        });
    });

})();

(function () {

    const carousel = document.querySelector(".project-carousel");
    const prevBtn = document.querySelector(".carousel-arrow-prev");
    const nextBtn = document.querySelector(".carousel-arrow-next");

    if (!carousel || !prevBtn || !nextBtn) return;

    const scrollByCard = (direction) => {
        const card = carousel.querySelector(".project-card");
        if (!card) return;

        const cardWidth = card.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(carousel).columnGap || 0);

        carousel.scrollBy({
            left: (cardWidth + gap) * direction,
            behavior: "smooth"
        });
    };

    prevBtn.addEventListener("click", () => scrollByCard(-1));
    nextBtn.addEventListener("click", () => scrollByCard(1));

})();
(function () {

    const items = document.querySelectorAll("#approach-accordion .accordion-item");

    if (!items.length) return;

    items.forEach((item) => {
        const trigger = item.querySelector(".accordion-trigger");
        const panel = item.querySelector(".accordion-panel");

        if (!trigger || !panel) return;

        const open = () => {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        };

        const close = () => {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
            requestAnimationFrame(() => {
                panel.style.maxHeight = "0px";
            });
        };

        panel.addEventListener("transitionend", (event) => {
            if (event.propertyName !== "max-height") return;
            if (trigger.getAttribute("aria-expanded") === "true") {
                panel.style.maxHeight = "none";
            }
        });

        // Reflect whatever the markup already declared (the first step
        // ships expanded by default) before wiring up interaction.
        if (trigger.getAttribute("aria-expanded") === "true") {
            open();
        }

        trigger.addEventListener("click", () => {
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";

            isExpanded ? close() : open();
            trigger.setAttribute("aria-expanded", String(!isExpanded));
        });
    });

    window.addEventListener("resize", () => {
        items.forEach((item) => {
            const trigger = item.querySelector(".accordion-trigger");
            const panel = item.querySelector(".accordion-panel");
            if (trigger && panel && trigger.getAttribute("aria-expanded") === "true") {
                panel.style.maxHeight = "none";
            }
        });
    });

})();

(function () {

    const nav = document.getElementById("domains-nav");

    if (!nav) return;

    const tabs = Array.from(nav.querySelectorAll(".domains-nav-item"));
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

    const selectTab = (index) => {
        tabs.forEach((tab, i) => {
            const isSelected = i === index;
            tab.setAttribute("aria-selected", String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
            if (panels[i]) panels[i].hidden = !isSelected;
        });
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => selectTab(index));

        tab.addEventListener("keydown", (event) => {
            let targetIndex = null;

            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                targetIndex = (index + 1) % tabs.length;
            } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                targetIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                targetIndex = 0;
            } else if (event.key === "End") {
                targetIndex = tabs.length - 1;
            }

            if (targetIndex === null) return;

            event.preventDefault();
            selectTab(targetIndex);
            tabs[targetIndex].focus();
        });
    });

})();
