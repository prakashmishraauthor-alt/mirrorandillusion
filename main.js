(function () {

    "use strict";

    let initialized = false;

    function init() {

        if (initialized) return;
        initialized = true;

        document.body.classList.add("mi-ready");

        // Wait one frame for layout stability
        requestAnimationFrame(() => {

            document.body.classList.add("mi-loaded");

        });

        console.log("Mirror & Illusion V2 fully loaded");

    }

    if (document.readyState === "complete") {
        init();
    } else {
        window.addEventListener("load", init);
    }

    window.addEventListener("error", (e) => {
        console.warn("MI V2 Error:", e.message);
    });

})();
