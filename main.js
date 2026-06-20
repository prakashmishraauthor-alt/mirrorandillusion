(function () {

    "use strict";

    function domReady(callback) {

        if (document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }

    }

    domReady(() => {

        // Modules already self-initialize via DOMContentLoaded
        // So we just safely track system readiness

        document.body.classList.add("mi-ready");

        setTimeout(() => {

            document.body.classList.add("mi-loaded");

        }, 300);

        console.log("Mirror & Illusion V2 initialized");

    });

    window.addEventListener("error", (e) => {

        console.warn("JS Error:", e.message);

    });

})();
