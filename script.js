// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const experience = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !experience || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        alert(`Thank you for joining Design Arena 2.0, ${name}! We'll contact you at ${email} soon.`);
        contactForm.reset();
    });
}

// Animate elements on scroll
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

// Observe all cards and sections
document.querySelectorAll('.stat-card, .feature-card, .battle-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add dynamic countdown timer for battles
function updateBattleTimers() {
    document.querySelectorAll('.battle-time').forEach(timer => {
        const text = timer.textContent;
        if (text.includes('remaining')) {
            // Parse time and decrement
            const parts = text.split(':');
            if (parts.length === 2) {
                let minutes = parseInt(parts[0]);
                let seconds = parseInt(parts[1].split(' ')[0]);

                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }

                if (minutes >= 0) {
                    timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} remaining`;
                }
            } else if (parts.length === 3) {
                // Hours format
                let hours = parseInt(parts[0]);
                let minutes = parseInt(parts[1]);
                let seconds = parseInt(parts[2].split(' ')[0]);

                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                    }
                }

                if (hours >= 0) {
                    timer.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} remaining`;
                }
            }
        }
    });
}

// Update timers every second
setInterval(updateBattleTimers, 1000);

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(99, 102, 241, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Button hover effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Design Arena 2.0 - Where Creativity Competes! 🎨⚔️');
