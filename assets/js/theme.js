/* ===================================
   SAVORA THEME
   Version : 1.0.0
=================================== */

const Theme = {

    key: "savora_theme",

    init() {

        const savedTheme = localStorage.getItem(this.key);

        if (savedTheme) {

            this.set(savedTheme);

        } else {

            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            this.set(prefersDark ? "dark" : "light");

        }

    },

    set(theme) {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(this.key, theme);

    },

    toggle() {

        const current =
            document.documentElement.getAttribute("data-theme");

        const next =
            current === "dark"
            ? "light"
            : "dark";

        this.set(next);

    },

    current() {

        return document.documentElement.getAttribute(
            "data-theme"
        );

    }

};