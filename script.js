/* ========== HTML On JavaScript ========*/
const Bigbox =[
{
RankIcon: "/Ranks/vip.png",
kits: "vip",
price: "5$",
prices: "/Icon.svg/exchange-dollar-line.svg",
ranks: "/Icon.svg/sparkling-2-line.svg",
preview: "/Icon.svg/dashboard-line.svg",
kitPreview: "/Icon.svg/dragon.jpeg"
},

{
RankIcon: "/Ranks/mvp.png",
kits: "mvp",
price: "10$",
prices: "/Icon.svg/exchange-dollar-line.svg",
ranks: "/Icon.svg/sparkling-2-line.svg",
preview: "/Icon.svg/dashboard-line.svg",
kitPreview: "/Icon.svg/Cloud.png"
},

{
RankIcon: "/Ranks/mvp+.png",
kits: "mvp+",
price: "15$",
prices: "/Icon.svg/exchange-dollar-line.svg",
ranks: "/Icon.svg/sparkling-2-line.svg",
preview: "/Icon.svg/dashboard-line.svg",
kitPreview: "/Icon.svg/Cloud.png"
},

{
RankIcon: "/Ranks/epic.png",
kits: "epic",
price: "20$",
prices: "/Icon.svg/exchange-dollar-line.svg",
ranks: "/Icon.svg/sparkling-2-line.svg",
preview: "/Icon.svg/dashboard-line.svg",
kitPreview: "/Icon.svg/Cloud.png"
},

{
RankIcon: "/Ranks/kingdom.png",
kits: "kingdom",
price: "25$",
prices: "/Icon.svg/exchange-dollar-line.svg",
ranks: "/Icon.svg/sparkling-2-line.svg",
preview: "/Icon.svg/dashboard-line.svg",
kitPreview: "/Icon.svg/Cloud.png"
}
];

const Boxs = document.querySelector(".Bigbox");

Bigbox.forEach(item => {

const card = document.createElement("div");
card.className = "box reveal";

card.innerHTML = `
<img class="RankIcon" src="${item.RankIcon}" alt="Rank" onerror="this.src='/Icon.svg/greck.jpeg'">

<p class="name">${item.kits}</p>
<p class="price">${item.price}</p>

<div class="kits-dsc">

<p class="kit-info">
<img class="social" src="${item.prices}">
${item.price}
</p>

<p class="kit-info">
<img class="social" src="${item.ranks}">
${item.kits}
</p>

<p class="kit-info">
<img class="social" src="${item.preview}">
<button class="view-kit" onclick="preview('${item.kitPreview}')">Preview Kit</button>
</p>
</div>
`;

Boxs.appendChild(card);

});

// ========================
// Preview Kit Popup
// ========================

function preview(img){

  // create preview container
  const previewBox = document.createElement("div");
  previewBox.className = "preview-popup";

  previewBox.innerHTML = `
     <div class="preview-content">
        <span class="close-preview">close</span>
        <div class="Kit-container">
         <div class="skeleton" id="KitSkeleton"></div>
        <img src="${img}" id="KitGUI" onload="hideSkeleton()" onerror="showFallback()">
    </div>
     </div>
  `;

  document.body.appendChild(previewBox);

  // close button
  previewBox.querySelector(".close-preview").onclick = () => {
      previewBox.remove();
  };

  // click outside close
  previewBox.onclick = (e) => {
      if(e.target === previewBox){
          previewBox.remove();
      }
  };

}
/* ========================
Menu Toggle
======================== */

function toggleMenu() {
document.getElementById("sidebar").classList.toggle("active");
document.querySelector(".menu-btn").classList.toggle("hide");
document.querySelector(".close").classList.toggle("show");
}

function closeMenu() {
document.querySelector(".menu-btn").classList.remove("hide");
document.querySelector(".close").classList.remove("show");
document.getElementById("sidebar").classList.remove("active");
}


/* ========================
Progress Loader
======================== */

let progress = 0;

const progressBar = document.getElementById("progress");
const percentText = document.getElementById("percent");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

let interval = setInterval(() => {

progress++;

progressBar.style.width = progress + "%";
percentText.textContent = progress + "%";

if(progress >= 100){

clearInterval(interval);

loader.classList.add("fade-out");

setTimeout(()=>{

loader.style.display = "none";
content.style.display = "block";

},500);

}

},25);


/* ========================
Scroll Reveal
======================== */

function reveal(){

var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {

var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 100;

if (elementTop <= windowHeight - elementVisible) {
reveals[i].classList.add("active");
}
else {
reveals[i].classList.remove("active");
}

}

}

window.addEventListener("scroll", reveal,{passive:true});


/* ========================
Cursor Animation
======================== */

const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

const speed = 0.15;

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});

function animateCursor(){

cursorX += (mouseX - cursorX) * speed;
cursorY += (mouseY - cursorY) * speed;

cursor.style.left = cursorX + "px";
cursor.style.top = cursorY + "px";

requestAnimationFrame(animateCursor);

}

animateCursor();
// ===============
//  skeleton loader  
// ===============
function hideSkeleton(){
  document.getElementById("KitSkeleton").classList.add("hidden");
}
// function showFallback(){
//  document.getElementById("KitSkeleton").classList.add("hidden");
//  document.getElementById("KitGUI").src = "/Icon.svg/Server-Logo.webp";
//}