/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if(menuBtn && nav){
menuBtn.addEventListener("click",()=>{
nav.classList.toggle("active");
});
}


/* IMAGE SLIDER */

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides(){

if(slides.length === 0) return;

slides.forEach(slide=>{
slide.style.display="none";
});

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,4000);
}

showSlides();


/* BLOG SEARCH */

const searchInput = document.querySelector("#searchInput");
const articles = document.querySelectorAll(".article");

if(searchInput){
searchInput.addEventListener("keyup",function(){

let filter = searchInput.value.toLowerCase();

articles.forEach(article=>{
let text = article.textContent.toLowerCase();
article.style.display = text.includes(filter) ? "block" : "none";
});

});
}


/* DARK MODE */

const themeToggle = document.querySelector("#themeToggle");

if(themeToggle){
themeToggle.addEventListener("click",()=>{
document.body.classList.toggle("light-mode");
});
}


/* SCROLL ANIMATION */

const animated = document.querySelectorAll(".animate");

function reveal(){

animated.forEach(el=>{
const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("show");
}
});

}

window.addEventListener("scroll",reveal);


/* NEWSLETTER POPUP */

const form = document.querySelector("#subscribeForm");

if(form){
form.addEventListener("submit",function(e){
e.preventDefault();
alert("🎉 Thank you for subscribing!");
form.reset();
});
}


/* COPY LINK */

function copyLink(){
navigator.clipboard.writeText(window.location.href);
alert("Link copied to clipboard!");
}


/* MINI SCANNER */

function runMiniScan(){

let score =
+document.getElementById("ms_sleep").value +
+document.getElementById("ms_energy").value;

let status = "";
let color = "";
let message = "";

if(score < 20){
status = "Low Energy";
color = "#ef4444";
message = "You need immediate recovery";
}
else if(score < 40){
status = "Moderate Energy";
color = "#facc15";
message = "You can improve performance";
}
else{
status = "High Energy";
color = "#22c55e";
message = "You're in a good state";
}

let box = document.getElementById("miniResult");

if(box){
box.style.display = "block";

box.innerHTML = `
<div style="font-size:24px; color:${color}; font-weight:bold;">
${status}
</div>

<div style="margin-top:8px;">
Score: ${score}/60
</div>

<p style="margin-top:10px;">
${message}
</p>

<a href="energy-reset.html" 
style="display:inline-block; margin-top:10px; background:#00ffd5; color:#000; padding:10px 15px; border-radius:6px; text-decoration:none; font-weight:bold;">
Run Full Energy Scan →
</a>
`;
}

}

function analyze(){

let dopamine=0, cognitive=0, emotional=0, biological=0;
let total = 0;

// ✅ CHECK ALL QUESTIONS ANSWERED
for(let i=1;i<=20;i++){
  let q = document.querySelector(`input[name=q${i}]:checked`);
  
  if(!q){
    alert("Please answer all 20 questions before analyzing.");
    return;
  }

  let val = parseInt(q.value);
  total += val;

  if(i<=5) dopamine+=val;
  else if(i<=10) cognitive+=val;
  else if(i<=15) emotional+=val;
  else biological+=val;
}

// LEVEL FUNCTION
function level(score){
  if(score >= 20) return "High";
  if(score >= 10) return "Moderate";
  return "Low";
}

let dLevel = level(dopamine);
let cLevel = level(cognitive);
let eLevel = level(emotional);
let bLevel = level(biological);

// INTERPRETATION
let insights = "";

if(dLevel==="High" && eLevel==="High"){
  insights += "Your pattern strongly indicates dopamine overstimulation combined with emotional instability.<br>";
}

if(cLevel==="High"){
  insights += "There are clear signs of cognitive strain and reduced neural efficiency.<br>";
}

if(bLevel==="High"){
  insights += "Your biological rhythms appear misaligned, affecting recovery and clarity.<br>";
}

if(insights===""){
  insights = "Your brain systems show mild imbalance but no dominant dysfunction.";
}

// OUTPUT
document.getElementById("result").innerHTML = `

<div class="result-card">

<h2>🧠 Brain Analysis Summary</h2>
<p><b>Total Score:</b> ${total}/100</p>

<h3>System Status</h3>

<ul>
<li><b>Dopamine Regulation:</b> ${dLevel}</li>
<li><b>Cognitive Performance:</b> ${cLevel}</li>
<li><b>Emotional Stability:</b> ${eLevel}</li>
<li><b>Biological Rhythm:</b> ${bLevel}</li>
</ul>

<div class="highlight">
${insights}
</div>

<button type="button" onclick="goToPlan()" style="
margin-top:15px;
width:100%;
background:#f59e0b;
color:black;
padding:12px;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
Get Your Brain Reset Plan →
</button>

</div>
`;

// SAVE DATA
localStorage.setItem("brainData", JSON.stringify({
  total, dLevel, cLevel, eLevel, bLevel
}));

// SCROLL
document.getElementById("result").scrollIntoView({behavior: "smooth"});

}


// ✅ NAVIGATION FUNCTION
function goToPlan(){
  window.location.href = "brain-reset-plan.html";
}

function generateInsights() {

let logs = JSON.parse(localStorage.getItem("journal")) || [];

if(logs.length < 3){
document.getElementById("insightBox").innerHTML =
"<h3>📊 Weekly Insight</h3><p>Write for a few days to unlock insights.</p>";
return;
}

// Last 7 entries
let week = logs.slice(0,7);

// CONSISTENCY
let consistency = week.length;

// DEPTH CALCULATION
let totalDepth = 0;

week.forEach(e => {
let count = 0;
if(e.g1) count++;
if(e.g2) count++;
if(e.g3) count++;
if(e.feeling) count++;
totalDepth += count;
});

let avgDepth = (totalDepth / week.length).toFixed(1);

// TREND DETECTION
let trend = "";
if(avgDepth >= 3){
trend = "📈 Your reflection depth is strong and improving.";
}
else if(avgDepth >= 2){
trend = "🌤️ You're becoming more aware day by day.";
}
else{
trend = "⚠️ Your entries are shallow — slow down and reflect more.";
}

// CONSISTENCY MESSAGE
let consistencyMsg = "";

if(consistency >= 6){
consistencyMsg = "🔥 Excellent consistency — you're building a solid habit.";
}
else if(consistency >= 4){
consistencyMsg = "👍 Good consistency — keep showing up.";
}
else{
consistencyMsg = "⚠️ Inconsistent — your growth depends on daily reflection.";
}

// FINAL OUTPUT
document.getElementById("insightBox").innerHTML = `
<h3>📊 Weekly Insight</h3>

<ul>
<li>${consistencyMsg}</li>
<li>🧠 Avg Reflection Depth: ${avgDepth}/4</li>
<li>${trend}</li>
<li>💡 Insight: You feel better on days you reflect deeper.</li>
</ul>
`;

}

function calculateHeart() {
  let score = 0;

  // Basic Inputs
  const age = parseInt(document.getElementById('age').value) || 0;
  const exercise = parseInt(document.getElementById('exercise').value) || 0;

  // Lifestyle Factors
  const diet = parseInt(document.getElementById('diet').value);
  const smoke = parseInt(document.getElementById('smoke').value);
  const stress = parseInt(document.getElementById('stress').value);
  const burden = parseInt(document.getElementById('burden').value);
  const fightFlight = parseInt(document.getElementById('fightFlight').value);
  const anger = parseInt(document.getElementById('anger').value);
  const thyroid = parseInt(document.getElementById('thyroid').value);

  /* -------------------------
     AGE SCORING
  ------------------------- */
  if (age >= 18 && age <= 30) {
    score += 15;
  } else if (age <= 45) {
    score += 12;
  } else if (age <= 60) {
    score += 8;
  } else {
    score += 4;
  }

  /* -------------------------
     EXERCISE SCORING
  ------------------------- */
  if (exercise >= 5) {
    score += 15;
  } else if (exercise >= 3) {
    score += 10;
  } else if (exercise >= 1) {
    score += 5;
  }

  /* -------------------------
     ADD ALL QUESTION SCORES
  ------------------------- */
  score += diet;
  score += smoke;
  score += stress;
  score += burden;
  score += fightFlight;
  score += anger;
  score += thyroid;

  /* -------------------------
     RESULT INTERPRETATION
  ------------------------- */
  let message = "";
  let color = "";

  if (score >= 85) {
    message = "Excellent Heart Health ❤️";
    color = "#16a34a";
  } else if (score >= 70) {
    message = "Good Heart Health 💚";
    color = "#65a30d";
  } else if (score >= 55) {
    message = "Moderate Risk 🟠";
    color = "#ea580c";
  } else {
    message = "High Risk 🔴";
    color = "#dc2626";
  }

  document.getElementById('result').innerHTML =
    `Your Heart Health Score: <strong>${score}/100</strong><br>${message}`;

  document.getElementById('result').style.color = color;
}

function resetHeartForm() {
  document.getElementById('age').value = '';
  document.getElementById('exercise').value = '';

  document.getElementById('diet').selectedIndex = 0;
  document.getElementById('smoke').selectedIndex = 0;
  document.getElementById('stress').selectedIndex = 0;
  document.getElementById('burden').selectedIndex = 0;
  document.getElementById('fightFlight').selectedIndex = 0;
  document.getElementById('anger').selectedIndex = 0;
  document.getElementById('thyroid').selectedIndex = 0;

  const result = document.getElementById('result');
  result.innerHTML = '';
  result.style.color = '';
}
function resetHeartForm() {
  // Reset all form controls
  document.querySelectorAll('.tool-box input').forEach(input => {
    input.value = '';
  });

  document.querySelectorAll('.tool-box select').forEach(select => {
    select.selectedIndex = 0;
  });

  // Clear result
  const result = document.getElementById('result');
  result.textContent = '';
  result.style.color = '';
}
