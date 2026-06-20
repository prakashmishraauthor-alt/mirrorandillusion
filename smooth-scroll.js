```javascript id="smooth-scroll-js"
/* ==========================================================
   MIRROR & ILLUSION V2
   smooth-scroll.js
   Smooth Anchor Navigation
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    if (!links.length) return;

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId.length === 1
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const header = document.querySelector(".site-header");

            const headerHeight = header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

            /* Close mobile navigation */

            const navigation = document.querySelector(".navigation");
            const menuToggle = document.querySelector(".menu-toggle");

            if(navigation){

                navigation.classList.remove("active");

            }

            if(menuToggle){

                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded","false");

            }

        });

    });

});
```
