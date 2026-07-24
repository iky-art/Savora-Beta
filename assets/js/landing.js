/* ==========================================
   SAVORA LANDING
========================================== */

"use strict";

const Landing = {};

/* ==========================================
   LOADER
========================================== */

Landing.loader = function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

setTimeout(() => {

    loader.remove();

}, 500);

        }, 800);

    });

};

/* ==========================================
   MOBILE MENU
========================================== */

Landing.menu = function () {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    console.log("menuBtn:", menuBtn);
    console.log("mobileMenu:", mobileMenu);

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {

        console.log("Hamburger clicked!");

        menuBtn.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open",
            mobileMenu.classList.contains("active")
        );

    });

};

/* ==========================================
   CLOSE MENU
========================================== */

Landing.closeMenu = function () {

    const menuBtn = document.getElementById("menuBtn");

    const mobileMenu = document.getElementById("mobileMenu");

    const links = mobileMenu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");

            mobileMenu.classList.remove("active");

        });

    });

};

/* ==========================================
   CLICK OUTSIDE
========================================== */

Landing.outside = function () {

    const menuBtn = document.getElementById("menuBtn");

    const mobileMenu = document.getElementById("mobileMenu");

    document.addEventListener("click", (e) => {

        if (

            !mobileMenu.contains(e.target) &&

            !menuBtn.contains(e.target)

        ) {

            menuBtn.classList.remove("active");

            mobileMenu.classList.remove("active");

        }

    });

};

/* ==========================================
   SMOOTH SCROLL
========================================== */

Landing.scroll = function () {

    document.querySelectorAll('a[href^="#"]')

        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();

                const target = document.querySelector(

                    this.getAttribute("href")

                );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            });

        });

};

/* ==========================================
   NAVBAR
========================================== */

Landing.navbar = function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        navbar.classList.toggle(

            "scrolled",

            window.scrollY > 10

        );

    });

};

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

Landing.activeMenu = function () {

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a, .mobile-menu a"
        );

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 120;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

};

/* ==========================================
   BACK TO TOP
========================================== */

Landing.backToTop = function () {

    const button =
        document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        button.classList.toggle(

            "show",

            window.scrollY > 500

        );

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

};

/* ==========================================
   REVEAL
========================================== */

Landing.reveal = function () {

    if (this.prefersReducedMotion()) {

        document
            .querySelectorAll(".reveal")
            .forEach(item => {

                item.classList.add("show");

            });

        return;

    }

    const items =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            });

        }, {

            threshold: 0.15

        });

    items.forEach(item => {

        observer.observe(item);

    });

};

/* ==========================================
   COUNTER
========================================== */

Landing.counter = function () {

    const counters =
        document.querySelectorAll("[data-count]");

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);

        let current = 0;

        const speed =
            target / 80;

        const update = () => {

            current += speed;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent =
                Math.floor(current);

            requestAnimationFrame(update);

        };

        update();

    });

};

/* ==========================================
   DYNAMIC NAVBAR
========================================== */

Landing.dynamicNavbar = function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const update = () => {

        if (window.scrollY > 30) {

            navbar.classList.add("navbar-solid");

        } else {

            navbar.classList.remove("navbar-solid");

        }

    };

    update();

    window.addEventListener("scroll", update);

};

/* ==========================================
   RESIZE
========================================== */

Landing.resize = function () {

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    window.addEventListener("resize", () => {

        if (window.innerWidth >= 992) {

            menuBtn?.classList.remove("active");

            mobileMenu?.classList.remove("active");

        }

    });

};

/* ==========================================
   ESC KEY
========================================== */

Landing.escape = function () {

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;

        menuBtn?.classList.remove("active");

        mobileMenu?.classList.remove("active");

    });

};

/* ==========================================
   LAZY IMAGE
========================================== */

Landing.lazyImages = function () {

    const images =
        document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            });

        });

    images.forEach(img => {

        observer.observe(img);

    });

};

/* ==========================================
   PRELOAD LOGO
========================================== */

Landing.preload = function () {

    const logo = new Image();

    logo.src = "assets/svg/logo.svg";

};

/* ==========================================
   PAGE ANIMATION
========================================== */

Landing.pageAnimation = function () {

    document.body.classList.add("page-ready");

};

/* ==========================================
   THROTTLE
========================================== */

Landing.throttle = function (callback, delay = 100) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

};

/* ==========================================
   REDUCED MOTION
========================================== */

Landing.prefersReducedMotion = function () {

    return window.matchMedia(

        "(prefers-reduced-motion: reduce)"

    ).matches;

};

/* ==========================================
   PAGE VISIBILITY
========================================== */

Landing.visibility = function () {

    document.addEventListener(

        "visibilitychange",

        () => {

            if (!document.hidden) {

                window.dispatchEvent(

                    new Event("scroll")

                );

            }

        }

    );

};

/* ==========================================
   INIT
========================================== */

Landing.init = function () {

    this.loader();
    this.menu();
    this.closeMenu();
    this.outside();
    this.scroll();
    this.navbar();
    this.dynamicNavbar();
    this.activeMenu();
    this.backToTop();
    this.reveal();
    this.counter();
    this.resize();
    this.escape();
    this.preload();
    this.lazyImages();
    this.pageAnimation();
    this.visibility();

};

document.addEventListener("DOMContentLoaded", () => {

    Landing.init();

});