```javascript id="newsletter-js"
/* ==========================================================
   MIRROR & ILLUSION V2
   newsletter.js
   Newsletter Form Handler
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".newsletter-form");
    const input = document.querySelector(".newsletter-form input");
    const button = document.querySelector(".newsletter-form button");

    if (!form || !input || !button) return;

    /* ==========================================
       Simple Email Validation
    ========================================== */

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

    /* ==========================================
       UI Feedback
    ========================================== */

    function showMessage(type, message) {

        let existing = document.querySelector(".newsletter-message");

        if (existing) existing.remove();

        const msg = document.createElement("div");

        msg.className = `newsletter-message ${type}`;

        msg.textContent = message;

        form.appendChild(msg);

        setTimeout(() => {

            msg.classList.add("hide");

            setTimeout(() => msg.remove(), 400);

        }, 3000);

    }

    /* ==========================================
       Submit Handler
    ========================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = input.value.trim();

        if (!email || !isValidEmail(email)) {

            showMessage("error", "Please enter a valid email address.");
            return;

        }

        /* Simulated success (no backend yet) */

        button.disabled = true;
        button.textContent = "Joining...";

        setTimeout(() => {

            input.value = "";

            button.disabled = false;
            button.textContent = "Join Now";

            showMessage("success", "Welcome to Mirror & Illusion.");

        }, 1200);

    });

});
```
