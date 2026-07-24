"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".auth-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {

            alert("Email dan password wajib diisi.");

            return;

        }

        SavoraAuth.login({
            email: email
        });

        window.location.href = "dashboard.html";

    });

});