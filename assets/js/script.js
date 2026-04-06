/* ================= Royal Princess Invitation ================= */

const envelope = document.getElementById('envelope');
const sound = document.getElementById('openSound');

// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✨';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating crowns
function createCrowns() {
    const crownsContainer = document.querySelector('.crowns');
    const crownEmojis = ['👑', '💎', '⭐', '🌟'];
    
    for (let i = 0; i < 8; i++) {
        const crown = document.createElement('div');
        crown.className = 'crown';
        crown.innerHTML = crownEmojis[Math.floor(Math.random() * crownEmojis.length)];
        crown.style.left = Math.random() * 100 + 'vw';
        crown.style.top = Math.random() * 100 + 'vh';
        crown.style.animationDelay = Math.random() * 6 + 's';
        crown.style.animationDuration = (5 + Math.random() * 3) + 's';
        crownsContainer.appendChild(crown);
    }
}

// Royal envelope opening
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    
    // Magical sound
    if (sound) {
        sound.volume = 0.7;
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Audio play failed'));
    }

    // Royal celebration!
    setTimeout(() => {
        window.location.href = "page2.html";
    }, 1500);
});

// Initialize magic
createStars();
createCrowns();

/* ================= Enchanted Falling Petals ================= */
const petalsContainer = document.querySelector('.petals');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    petal.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 12 + 16;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = (3 + Math.random() * 3) + 's';
    petal.style.opacity = 0.6 + Math.random() * 0.4;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 7000);
}

// Continuous petal shower
setInterval(createPetal, 200);

// Welcome sparkle burst
setTimeout(() => {
    for (let i = 0; i < 15; i++) {
        setTimeout(createPetal, i * 100);
    }
}, 1000);

const subtitle = document.querySelector('.princess-subtitle');
const text = subtitle.innerText;
subtitle.innerHTML = '';

const radius = 60; // controls the curve

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];

    const angle = (i - text.length / 2) * 10; // spacing of curve

    span.style.transform = `
        rotate(${angle}deg)
        translateY(-${radius}px)
    `;

    subtitle.appendChild(span);
}