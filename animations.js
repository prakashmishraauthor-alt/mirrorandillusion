```javascript id="animations-js"
/* ==========================================================
   MIRROR & ILLUSION V2
   animations.js
   Premium Motion Effects
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const heroGlow = document.querySelector(".hero-glow");
    const heroOrb = document.querySelector(".hero-orb");

    let ticking = false;

    /* ==========================================
       Hero Parallax
    ========================================== */

    function updateParallax() {

        const scrollY = window.scrollY;

        if (hero) {

            hero.style.backgroundPosition =
                `center ${scrollY * 0.25}px`;

        }

        if (heroContent) {

            heroContent.style.transform =
                `translateY(${scrollY * 0.12}px)`;

        }

        if (heroGlow) {

            heroGlow.style.transform =
                `translateY(${scrollY * 0.18}px)`;

        }

        if (heroOrb) {

            heroOrb.style.transform =
                `translateY(${scrollY * 0.08}px)`;

        }

        ticking = false;

    }

    function requestTick() {

        if (!ticking) {

            window.requestAnimationFrame(updateParallax);
            ticking = true;

        }

    }

    window.addEventListener("scroll", requestTick, {

        passive: true

    });


    /* ==========================================
       Mouse Light Effect
    ========================================== */

    if (hero) {

        hero.addEventListener("mousemove", (event) => {

            const rect = hero.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            hero.style.setProperty("--mouse-x", `${x}px`);
            hero.style.setProperty("--mouse-y", `${y}px`);

        });

    }


    /* ==========================================
       Button Ripple
    ========================================== */

    document.querySelectorAll(".button, .btn")

    .forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /* ==========================================
       Card Tilt
    ========================================== */

    document.querySelectorAll(

        ".pillar-card, .library-card"

    ).forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX =
                (y - rect.height / 2) / 25;

            const rotateY =
                (rect.width / 2 - x) / 25;

            card.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ==========================================
       Lazy Image Fade
    ========================================== */

    document.querySelectorAll("img")

    .forEach(image => {

        if(image.complete){

            image.classList.add("loaded");

        }else{

            image.addEventListener("load", () => {

                image.classList.add("loaded");

            });

        }

    });


    /* ==========================================
       Body Loaded
    ========================================== */

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

});
```

