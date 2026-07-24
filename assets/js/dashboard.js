/* ==========================================
   SAVORA DASHBOARD
========================================== */

"use strict";

/* ==========================================
   ELEMENTS
========================================== */

const body = document.body;

const sidebar =
    document.getElementById("sidebar");

const menuToggle =
    document.getElementById("menuToggle");

/* ==========================================
   SIDEBAR
========================================== */

if (menuToggle && sidebar) {

    menuToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle("active");

        }
    );

}

/* ==========================================
   CLOSE SIDEBAR (MOBILE)
========================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            window.innerWidth <= 992 &&
            sidebar &&
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            sidebar.classList.remove("active");

        }

    }
);

/* ==========================================
   DARK MODE
========================================== */

const themeButton =
    document.querySelector(
        ".header-btn[aria-label='Theme']"
    );

const savedTheme =
    localStorage.getItem("savora-theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

}

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            body.classList.toggle("dark");

            localStorage.setItem(
                "savora-theme",
                body.classList.contains("dark")
                    ? "dark"
                    : "light"
            );

        }
    );

}

/* ==========================================
   PAGE READY
========================================== */

window.addEventListener(
    "load",
    () => {

        body.classList.add("loaded");

    }
);

console.log(
    "✅ Savora Dashboard Loaded"
);