



// Countdown
const date = new Date("April 27, 2026 15:00:00").getTime();
setInterval(()=>{
  const now=new Date().getTime();
  const diff=date-now;
  if(diff>0){
    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m=Math.floor((diff%(1000*60*60))/(1000*60));
    const s=Math.floor((diff%(1000*60))/1000);
    document.getElementById("days").innerText=d;
    document.getElementById("hours").innerText=h.toString().padStart(2,"0");
    document.getElementById("minutes").innerText=m.toString().padStart(2,"0");
    document.getElementById("seconds").innerText=s.toString().padStart(2,"0");
  }
},1000);



const petalsContainer = document.querySelector('.petals');

function createPetal(){
  const petal = document.createElement('div');
  petal.classList.add('petal');

  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (4 + Math.random() * 4) + 's';

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 8000);
}

setInterval(createPetal, 300);


/* SCROLL ANIMATION */
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

/* MUSIC PLAYER */
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = false;
let heartbeatInterval;

// BPM
const BPM = 120;
const interval = (60 / BPM) * 1000;

function startHeartbeat() {
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  heartbeatInterval = setInterval(() => {
    btn.style.transform = "scale(1.3)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, interval / 2);
  }, interval);
}

function stopHeartbeat() {
  clearInterval(heartbeatInterval);
  btn.style.transform = "scale(1)";
}

// ▶️ play music after first interaction
function initMusic() {
  music.play().then(() => {
    isPlaying = true;
    btn.textContent = "❚❚";
    startHeartbeat();
  }).catch(() => {
    // autoplay blocked (just in case)
  });

  document.removeEventListener("click", initMusic);
  document.removeEventListener("touchstart", initMusic);
}

document.addEventListener("click", initMusic);
document.addEventListener("touchstart", initMusic);

// Button toggle
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent double-trigger

  if (isPlaying) {
    music.pause();
    btn.textContent = "▶";
    stopHeartbeat();
  } else {
    music.play();
    btn.textContent = "❚❚";
    startHeartbeat();
  }
  isPlaying = !isPlaying;
});

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
});

// ----------------------
// Auto-scroll Galleries
// ----------------------
const gallery1 = document.querySelector('.gallery1');
const gallery2 = document.querySelector('.gallery2');

// Duplicate gallery content for seamless scroll
gallery1.innerHTML += gallery1.innerHTML;
gallery2.innerHTML += gallery2.innerHTML;

// ----------------------
// Lightbox Setup
// ----------------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Combine all images into one array AFTER duplication
const images = Array.from(document.querySelectorAll('.gallery1 img, .gallery2 img'));
let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Lightbox Navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  }
});

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}


// Gallery1 scroll left
let scrollPos1 = 0;
const scrollSpeed1 = 1;
let isPaused1 = false;
gallery1.addEventListener('mouseenter', () => isPaused1 = true);
gallery1.addEventListener('mouseleave', () => isPaused1 = false);

function autoScroll1() {
  if (!isPaused1) {
    scrollPos1 += scrollSpeed1;
    if (scrollPos1 >= gallery1.scrollWidth / 2) scrollPos1 = 0;
    gallery1.scrollLeft = scrollPos1;
  }
  requestAnimationFrame(autoScroll1);
}
autoScroll1();

// Gallery2 scroll right
let scrollPos2 = gallery2.scrollWidth / 2;
const scrollSpeed2 = 1;
let isPaused2 = false;
gallery2.addEventListener('mouseenter', () => isPaused2 = true);
gallery2.addEventListener('mouseleave', () => isPaused2 = false);

function autoScroll2() {
  if (!isPaused2) {
    scrollPos2--;
    if (scrollPos2 <= 0) scrollPos2 = gallery2.scrollWidth / 2;
    gallery2.scrollLeft = scrollPos2;
  }
  requestAnimationFrame(autoScroll2);
}
autoScroll2();

document.querySelector('.arrow.left').addEventListener('click', showPrev);
document.querySelector('.arrow.right').addEventListener('click', showNext);

const nav = document.querySelector('.nav');
  document.documentElement.style.setProperty(
    '--nav-height',
    nav.offsetHeight + 'px'
  );

  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty(
      '--nav-height',
      nav.offsetHeight + 'px'
    );
  });

  const sections = document.querySelectorAll('.section');

 

  sections.forEach(section => observer.observe(section));
const slides = document.querySelectorAll(".slide");
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(nextSlide, 5000);

  // Hamburger menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

const MOBILE_WIDTH = 768; // adjust if needed


// Toggle menu
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close when clicking outside (MOBILE ONLY)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= MOBILE_WIDTH &&
    navLinks.classList.contains("active") &&
    !nav.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }
});

// Close when clicking a link (mobile only)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= MOBILE_WIDTH) {
      navLinks.classList.remove("active");
    }
  });
});

// Safety: reset menu on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > MOBILE_WIDTH) {
    navLinks.classList.remove("active");
  }
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    const targetId=this.getAttribute('href').substring(1);
    const targetSection=document.getElementById(targetId);
    if(targetSection){
      window.scrollTo({top:targetSection.offsetTop-70,behavior:'smooth'});
    }
  });
});

function createButterfly() {
  const b = document.createElement("img");
  b.src = "envelope_picture/princess.png"; // your image
  b.className = "butterfly";

  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = (8 + Math.random() * 6) + "s";

  document.body.appendChild(b);

  setTimeout(() => b.remove(), 12000);
}

setInterval(createButterfly, 3000);