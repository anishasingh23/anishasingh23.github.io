// Load Sparkly Background (stars)
tsParticles.load("stars-particles", {
  fullScreen: false,
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    size: { value: 1.9 },
    move: { enable: true, speed: 0.6 },
    opacity: { value: 0.6 },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 60 },
    },
  },
  background: { color: "#0f0f11" }
});

// Rainbow Particle Layer (7 colors, hover repulse)
tsParticles.load("stars-particles", {
  fullScreen: false,
  particles: {
    number: { value: 100 },
    color: {
      value: [
        "#ff9ecf", // soft but deeper pink
        "#eab0ff", // dreamy lavender
        "#ffe680", // buttery yellow
        "#a0ecff", // aquamarine
        "#bdb2ff"  // light purple
      ]
    },
    shape: { type: "circle" },
    size: {
      value: { min: 1.5, max: 3 },
      animation: { enable: true, speed: 1.5, sync: false }
    },
    opacity: {
      value: 0.6,
      animation: {
        enable: true,
        speed: 0.4,
        minimumValue: 0.2,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 60 }
    }
  },
  background: { color: "#0f0f11" } // keep your dark dreamy base
});



const phrases = [
  "Hi, I'm Anisha.",
  "Frontend Dev.",
  "AI Creative.",
  "Magical Projects Ahead!"
];

const el = document.getElementById("typewriter-text");
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loopTyping() {
  isEnd = false;
  el.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const speed = isEnd ? 1500 : isDeleting ? 50 : 100;
  setTimeout(loopTyping, speed);
}

loopTyping();

const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.top = `${e.clientY}px`;
  cursorGlow.style.left = `${e.clientX}px`;
});
