// Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 1 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Add click events to nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Enhanced card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.08) rotateY(5deg)';
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1) rotateY(0deg)';
                card.style.zIndex = '1';
            });

            // Add random rotation on click
            card.addEventListener('click', () => {
                const randomRotation = Math.random() * 10 - 5;
                card.style.transform = `scale(1.05) rotate(${randomRotation}deg)`;
                setTimeout(() => {
                    card.style.transform = 'scale(1) rotate(0deg)';
                }, 300);
            });
        });

        // Contact form submission with humor
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const messages = [
                "Message sent! 🚀 I'll get back to you faster than my AI models converge!",
                "Thanks for reaching out! 💌 My neural networks are processing your message...",
                "Message received! 📨 Currently training a response model just for you!",
                "Awesome! 🎉 Your message made it past my spam filter (it's surprisingly good)!",
                "Got it! 📬 Deploying carrier pigeons... oh wait, this isn't the 1800s. Email it is!"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            e.target.reset();
        });

        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                alert("🎉 Easter egg found! You're clearly as much of a nerd as I am! 🤓");
                document.body.style.animation = 'gradientShift 1s ease infinite';
                setTimeout(() => {
                    document.body.style.animation = 'gradientShift 15s ease infinite';
                }, 5000);
            }
        });

        // Carousel scroll with mouse wheel
        document.querySelectorAll('.carousel').forEach(carousel => {
            carousel.addEventListener('wheel', (e) => {
                e.preventDefault();
                carousel.scrollBy({
                    left: e.deltaY > 0 ? 300 : -300,
                    behavior: 'smooth'
                });
            });
        });

        // Initialize animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards and skill categories for animation
        document.querySelectorAll('.card, .skill-category').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });

        // Fun tech tag interactions
        document.querySelectorAll('.tech-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const techMessages = {
                    'Python': "🐍 My favorite snake! (Sorry, actual snakes)",
                    'FAISS': "Facebook's gift to vector search!",
                    'BERT': "🤖 Not the Sesame Street character!",
                    'Flutter': "🦋 Making mobile apps flutter into existence!",
                    'TensorFlow': "Google's neural network playground!",
                    'Streamlit': "Making data science demos actually look good!",
                    'Deep Learning': "Going deep... into the matrix of matrices!",
                    'AI': "🤖 Teaching machines to think (scary, right?)"
                };
                
                const message = techMessages[tag.textContent] || `${tag.textContent} is pretty cool! 😎`;
                
                // Create floating message
                const floatingMsg = document.createElement('div');
                floatingMsg.textContent = message;
                floatingMsg.style.position = 'fixed';
                floatingMsg.style.top = '20px';
                floatingMsg.style.right = '20px';
                floatingMsg.style.background = 'linear-gradient(135deg, #ff6b9d, #4dabf7)';
                floatingMsg.style.color = 'white';
                floatingMsg.style.padding = '10px 20px';
                floatingMsg.style.borderRadius = '25px';
                floatingMsg.style.zIndex = '9999';
                floatingMsg.style.animation = 'slideInRight 0.5s ease';
                
                document.body.appendChild(floatingMsg);
                
                setTimeout(() => {
                    floatingMsg.remove();
                }, 3000);
            });
        });

        // Add CSS for slide animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Initialize particles and animations
        window.addEventListener('load', () => {
            createParticles();
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease';
        });

        // Random encouraging messages for long visitors
        let visitTime = 0;
        setInterval(() => {
            visitTime += 5;
            if (visitTime === 30) {
                console.log("🎉 You've been here for 30 seconds! You must really like my portfolio!");
            } else if (visitTime === 60) {
                console.log("🤔 Still here? I like your dedication! Check the console for easter eggs!");
            } else if (visitTime === 120) {
                console.log("🏆 2 minutes! You're either really interested or really procrastinating. Either way, I'm flattered!");
            }
        }, 5000);

        // ===== QUIRKY LANDING FUNCTIONALITY =====

// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Typewriter effect
const messages = [
    "Scanning visitor...",
    "IP detected: 192.168.1.recruiter",
    "Status: Probably looking for talent",
    "",
    "Oh, so you're here! 👋",
    "",
    "Welcome, curious soul!",
    "I see you've stumbled upon my digital playground.",
    "",
    "Before you judge my code,",
    "let me properly introduce myself...",
    "",
    "I'm a developer who believes",
    "creativity > conventional wisdom",
    "",
    "Ready to see what I've built?",
    "",
    "// Let's make something amazing together"
];

let messageIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');
const enterButton = document.getElementById('enterBtn');

function typeWriter() {
    if (messageIndex < messages.length) {
        const currentMessage = messages[messageIndex];
        
        if (charIndex <= currentMessage.length) {
            typewriterElement.innerHTML = messages.slice(0, messageIndex).join('<br>') + 
                (messageIndex > 0 ? '<br>' : '') + 
                currentMessage.substring(0, charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            messageIndex++;
            charIndex = 0;
            setTimeout(typeWriter, messageIndex < messages.length ? 800 : 1000);
        }
    } else {
        // Show enter button after typing is complete
        setTimeout(() => {
            if (enterButton) enterButton.classList.add('show');
        }, 500);
    }
}

// Function to enter portfolio (hide landing overlay)
function enterPortfolio() {
    const overlay = document.getElementById('landing-overlay');
    if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
}

// Initialize landing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    setTimeout(typeWriter, 1000);
    
    // Enter key functionality
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && enterButton && enterButton.classList.contains('show')) {
            enterPortfolio();
        }
    });
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            const overlay = document.getElementById('landing-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)';
                overlay.style.backgroundSize = '400% 400%';
                overlay.style.animation = 'gradientShift 3s ease infinite';
                
                setTimeout(() => {
                    alert('🎉 Easter egg found! You know your way around!');
                }, 1000);
            }
        }
    });
});

// ===== END QUIRKY LANDING FUNCTIONALITY =====
      

// camera funtionality

/// ===== CAMERA MODULE - FIXED VERSION =====

// Camera and emotion detection variables
let cameraStream = null;
let emotionInterval = null;
let cameraEnabled = false;

// Show camera permission modal after initial load
function showCameraModal() {
    const modal = document.getElementById('cameraModal');
    if (modal) {
        setTimeout(() => {
            modal.classList.add('show');
        }, 9000); // Show after 2 seconds
    }
}

// Request camera access
async function requestCamera() {
    try {
        // FIXED: Hide all modals first
        hideAllModals();
        
        cameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 200, height: 150 } 
        });
        
        const video = document.getElementById('userVideo');
        const preview = document.getElementById('cameraPreview');
        
        if (video && preview) {
            video.srcObject = cameraStream;
            preview.classList.add('show');
            cameraEnabled = true;
            startEmotionDetection();
        }
        
    } catch (error) {
        console.log('Camera access denied or not available');
        showDeniedModal();
    }
}

// Show "think again" modal
function showDeniedModal() {
    // FIXED: Hide other modals first
    hideAllModals();
    
    const modal = document.getElementById('cameraDeniedModal');
    if (modal) {
        setTimeout(() => {
            modal.classList.add('show');
        }, 500);
    }
}

// FIXED: New function to hide all modals
function hideAllModals() {
    const modal1 = document.getElementById('cameraModal');
    const modal2 = document.getElementById('cameraDeniedModal');
    
    if (modal1) modal1.classList.remove('show');
    if (modal2) modal2.classList.remove('show');
}

// Skip camera functionality
function skipCamera() {
    // FIXED: Use the new hideAllModals function
    hideAllModals();
}

// Close camera
function closeCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    
    const preview = document.getElementById('cameraPreview');
    if (preview) preview.classList.remove('show');
    
    if (emotionInterval) {
        clearInterval(emotionInterval);
        emotionInterval = null;
    }
    
    // FIXED: Also hide any open modals when closing camera
    hideAllModals();
    cameraEnabled = false;
}

// Simple emotion detection (mock for now - can be enhanced with face-api.js)
function startEmotionDetection() {
    const emotionDisplay = document.getElementById('emotionDisplay');
    const emotions = [
        { emoji: '🤔', text: 'Analyzing...', message: 'I sense curiosity...' },
        { emoji: '😊', text: 'Looking good!', message: 'That smile tells me you\'re interested!' },
        { emoji: '🧐', text: 'Focused', message: 'I see you\'re paying attention...' },
        { emoji: '😮', text: 'Impressed?', message: 'Ooh, that expression says \'show me more!\'' },
        { emoji: '👀', text: 'Watching', message: 'Those eyes say you\'re evaluating...' },
        { emoji: '💭', text: 'Thinking', message: 'I can see the gears turning...' }
    ];
    
    let currentEmotion = 0;
    
    emotionInterval = setInterval(() => {
        if (cameraEnabled && emotionDisplay) {
            const emotion = emotions[currentEmotion];
            emotionDisplay.innerHTML = `${emotion.emoji} ${emotion.text}`;
            
            // Occasionally add emotion-based messages to terminal
            if (Math.random() > 0.7) {
                const typewriterElement = document.getElementById('typewriter');
                if (typewriterElement) {
                    const currentText = typewriterElement.innerHTML;
                    typewriterElement.innerHTML = currentText + '<br><span style="color: #ff6b9d;">// ' + emotion.message + '</span>';
                    typewriterElement.scrollTop = typewriterElement.scrollHeight;
                }
            }
            
            currentEmotion = (currentEmotion + 1) % emotions.length;
        }
    }, 3000);
}

// Initialize camera system
function initCameraSystem() {
    // FIXED: Only show modal if user hasn't interacted yet
    showCameraModal();
    
    // ESC key to close camera/modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCamera();
            hideAllModals();
        }
    });
}

// FIXED: Auto-initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initCameraSystem();
});

// FIXED: Fallback for if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCameraSystem);
} else {
    initCameraSystem();
}

// FIXED: Add click outside to close modals
document.addEventListener('click', (e) => {
    const modal1 = document.getElementById('cameraModal');
    const modal2 = document.getElementById('cameraDeniedModal');
    
    // Close modal if clicking on the backdrop (not the content)
    if (e.target === modal1 || e.target === modal2) {
        skipCamera();
    }
});

// ===== END CAMERA MODULE =====
