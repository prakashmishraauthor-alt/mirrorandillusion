```javascript id="navigation-js"
/* ==========================================================
   MIRROR & ILLUSION V2
   navigation.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".navigation a");

    /* ==========================================
       Sticky Header
    ========================================== */

    function updateHeader(){

        if(window.scrollY > 60){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);


    /* ==========================================
       Mobile Menu
    ========================================== */

    if(menuToggle){

        menuToggle.addEventListener("click", () => {

            navigation.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    /* ==========================================
       Close Mobile Menu
    ========================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });


    /* ==========================================
       Active Navigation
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink(){

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if(window.scrollY >= sectionTop &&
               window.scrollY < sectionTop + sectionHeight){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if(href === "#" + current){

                link.classList.add("active");

            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

});
```
