/*=========================================================
 MIRROR & ILLUSION
 script.js
 PART 1
=========================================================*/


/*=========================================
ELEMENTS
=========================================*/

const hero = document.getElementById("hero");
const museum = document.getElementById("museum");
const enterButton = document.getElementById("enterButton");
const wizard = document.getElementById("wizard");
const particles = document.getElementById("particles");


/*=========================================
INITIAL STATE
=========================================*/

enterButton.style.opacity = "0";
enterButton.style.pointerEvents = "none";
enterButton.style.transform = "translateY(20px)";


/*=========================================
CREATE MAGIC PARTICLES
=========================================*/

function createParticles() {

    const total = 120;

    for (let i = 0; i < total; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";

        p.style.bottom = -20 + Math.random() * 50 + "px";

        const size = Math.random() * 5 + 2;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.animationDuration =
            6 + Math.random() * 10 + "s";

        p.style.animationDelay =
            Math.random() * 8 + "s";

        particles.appendChild(p);
    }

}

createParticles();


/*=========================================
SHOW ENTER BUTTON
=========================================*/

function revealButton() {

    enterButton.style.transition =
        "all 1.2s ease";

    enterButton.style.opacity = "1";

    enterButton.style.pointerEvents = "auto";

    enterButton.style.transform =
        "translateY(0)";

}


/*=========================================
WIZARD ARRIVES
=========================================*/

setTimeout(() => {

    revealButton();

}, 7000);


/*=========================================
BUTTON GLOW
=========================================*/

setInterval(() => {

    if (enterButton.style.opacity == "1") {

        enterButton.animate(

            [

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.04)"
                },

                {
                    transform: "scale(1)"
                }

            ],

            {

                duration: 1800

            }

        );

    }

}, 2200);


/*=========================================
ENTER BUTTON
=========================================*/

let entered = false;

enterButton.addEventListener("click", function () {

    if (entered) return;

    entered = true;

    hero.classList.add("fade-out");

    setTimeout(() => {

        hero.style.display = "none";

        museum.style.display = "block";

        museum.classList.add("fade-in");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 900);

});


/*=========================================
WELCOME MESSAGE
=========================================*/

console.log(

"Mirror & Illusion Loaded Successfully"

);
/*====================================================
SCRIPT.JS
PART 2
====================================================*/


/*=============================
PARALLAX
=============================*/

const heroContent = document.querySelector(".hero-content");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

heroContent.style.transform=
`translate(${x}px,${y}px)`;

wizard.style.transform=
`translate(${x*.35}px,${y*.35}px)`;

});


/*=============================
EXHIBIT HOVER
=============================*/

const exhibits=document.querySelectorAll(".exhibit");

exhibits.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate(

[
{
transform:"translateY(0px) scale(1)"
},

{
transform:"translateY(-8px) scale(1.02)"
}

],

{
duration:300,
fill:"forwards"
}

);

});

card.addEventListener("mouseleave",()=>{

card.animate(

[
{
transform:"translateY(-8px) scale(1.02)"
},

{
transform:"translateY(0px) scale(1)"
}

],

{
duration:300,
fill:"forwards"
}

);

});

});


/*=============================
RANDOM PARTICLE TWINKLE
=============================*/

setInterval(()=>{

const all=document.querySelectorAll(".particle");

all.forEach(p=>{

p.style.opacity=.3+Math.random()*.7;

});

},1200);


/*=============================
PAGE RESIZE
=============================*/

window.addEventListener("resize",()=>{

hero.style.height=window.innerHeight+"px";

});


/*=============================
WELCOME
=============================*/

setTimeout(()=>{

console.log(
"Welcome to Mirror & Illusion."
);

},500);


/*=============================
READY
=============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
