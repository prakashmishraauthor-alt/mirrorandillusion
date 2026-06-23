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

/*==================================================
ANCIENT WISDOM
PHASE 3
JAVASCRIPT
==================================================*/

/*=========================
LOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        },800);

    },1800);

});


/*=========================
ENTER HALL
=========================*/

const button = document.getElementById("enterHall");

const frame = document.querySelector(".door-frame");

button.addEventListener("click",()=>{

    frame.classList.add("open");

    setTimeout(()=>{

        window.scrollTo({

            top:document.querySelector(".voice-section").offsetTop,

            behavior:"smooth"

        });

    },1800);

});
/*=========================
SCROLL REVEAL
=========================*/

const reveals=document.querySelectorAll(

".scroll-card,.voice-section,.wisdom-quote"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

reveals.forEach(el=>observer.observe(el));


/*=========================
FLOATING DUST
=========================*/

const particles=document.getElementById("particles");

if(particles){

for(let i=0;i<90;i++){

const p=document.createElement("span");

const size=Math.random()*5+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=

8+Math.random()*12+"s";

p.style.animationDelay=

Math.random()*10+"s";

particles.appendChild(p);

}

}


/*=========================
LISTEN BUTTON
=========================*/

const listen=document.querySelector(".listen-btn");

if(listen){

listen.addEventListener("click",()=>{

listen.innerHTML="🔊 Playing...";

listen.disabled=true;

/*

Future:

Voice narration

Ambient music

Word highlighting

*/

});

}


/*=========================
PARALLAX HERO
=========================*/

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const hero=document.querySelector(".wisdom-hero");

if(hero){

hero.style.backgroundPositionY=

y*0.35+"px";

}

});


/*=========================
SCROLL CARD HOVER GLOW
=========================*/

document.querySelectorAll(".scroll-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

#fff2c2,

#e2cb93 40%,

#d2ba81)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=

"linear-gradient(#ead7a6,#d6be85)";

});

});


/*=========================
TITLE FADE
=========================*/

const heroTitle=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

if(heroTitle){

heroTitle.style.opacity=

1-window.scrollY/500;

heroTitle.style.transform=

`translateY(${window.scrollY*.25}px)`;

}

});
/*==================================================
FLOATING DUST
==================================================*/

const dustContainer = document.getElementById("goldDust");

if(dustContainer){

    for(let i=0;i<120;i++){

        const dust=document.createElement("div");

        dust.className="dust";

        const size=Math.random()*4+1;

        dust.style.width=size+"px";
        dust.style.height=size+"px";

        dust.style.left=Math.random()*100+"%";

        dust.style.animationDuration=
        (10+Math.random()*15)+"s";

        dust.style.animationDelay=
        (Math.random()*15)+"s";

        dustContainer.appendChild(dust);

    }

}
