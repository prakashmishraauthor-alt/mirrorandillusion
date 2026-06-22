/*=========================================
MIRROR & ILLUSION
script.js
=========================================*/

const hero = document.getElementById("hero");
const museum = document.getElementById("museum");
const wizard = document.getElementById("wizard");
const enterButton = document.getElementById("enterButton");
const particles = document.getElementById("particles");
const bgMusic = document.getElementById("bgMusic");
/*----------------------------------------
INITIAL
----------------------------------------*/

enterButton.style.opacity = "0";
enterButton.style.pointerEvents = "none";
enterButton.style.transform = "translateY(25px)";

/*----------------------------------------
CREATE PARTICLES
----------------------------------------*/

function createParticles() {

    for (let i = 0; i < 120; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";

        const size = 2 + Math.random() * 4;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.animationDuration =
            6 + Math.random() * 8 + "s";

        p.style.animationDelay =
            Math.random() * 8 + "s";

        particles.appendChild(p);
    }

}

createParticles();

/*----------------------------------------
BUTTON REVEAL
----------------------------------------*/

function revealButton() {

    enterButton.style.transition = "1s";

    enterButton.style.opacity = "1";

    enterButton.style.pointerEvents = "auto";

    enterButton.style.transform = "translateY(0)";

}

/*==================================
START WIZARD
==================================*/

wizard.classList.add("walk");


setTimeout(()=>{

    wizard.classList.remove("walk");

    wizard.classList.add("magic");

    revealButton();

},3000);
/*----------------------------------------
STOP WALK
----------------------------------------*/

setTimeout(()=>{

    wizard.classList.remove("walking");

    wizard.classList.add("magic");

},3000);

/*----------------------------------------
SHOW BUTTON
----------------------------------------*/

setTimeout(()=>{

    revealButton();

},4000);

/*----------------------------------------
ENTER
----------------------------------------*/

let entered=false;

enterButton.onclick=function(){

    if(entered) return;

    entered=true;

    hero.classList.add("fade-out");

    setTimeout(()=>{

        hero.style.display="none";

        museum.style.display="block";

        museum.classList.add("fade-in");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1000);

};

/*----------------------------------------
BUTTON PULSE
----------------------------------------*/

setInterval(()=>{

    if(enterButton.style.opacity=="1"){

        enterButton.animate(

        [

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.05)"
        },

        {
            transform:"scale(1)"
        }

        ],

        {

            duration:1800

        });

    }

},2200);

/*----------------------------------------
PARALLAX
----------------------------------------*/

const heroContent=document.querySelector(".hero-content");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    heroContent.style.transform=

    `translate(${x}px,${y}px)`;

});

/*----------------------------------------
EXHIBIT HOVER
----------------------------------------*/

const exhibits=document.querySelectorAll(".exhibit");

exhibits.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

/*----------------------------------------
TWINKLE
----------------------------------------*/

setInterval(()=>{

document.querySelectorAll(".particle").forEach(p=>{

p.style.opacity=.3+Math.random()*.7;

});

},1000);

/*----------------------------------------
READY
----------------------------------------*/

window.onload=function(){

console.log("Mirror & Illusion Ready");

};
