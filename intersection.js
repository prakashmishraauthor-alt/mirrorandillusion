```javascript id="intersection-js"
/* ==========================================================
   MIRROR & ILLUSION V2
   intersection.js
   Scroll Reveal System
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Elements to Animate
    ========================================== */

    const elements = document.querySelectorAll(

        ".fade-in,\
         .fade-left,\
         .fade-right,\
         .zoom-in"

    );

    if(!elements.length) return;

    /* ==========================================
       Observer Options
    ========================================== */

    const observerOptions = {

        root:null,

        rootMargin:"0px 0px -80px 0px",

        threshold:0.15

    };

    /* ==========================================
       Observer
    ========================================== */

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        observerOptions

    );

    /* ==========================================
       Observe Elements
    ========================================== */

    elements.forEach(element => {

        observer.observe(element);

    });

});
```
