// Interactive Animations and Effects
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect on buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Theme card hover effects - removed inline style manipulation to avoid conflicts with CSS transitions

    // Scroll glow effect removed — body.style.filter breaks position:fixed on modals

    // Animate counters
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Particle effect on page load
    const createParticles = () => {
        const particleCount = 50;
        const container = document.body;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 5 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = ['#667eea', '#764ba2', '#f093fb', '#ec4899'][Math.floor(Math.random() * 4)];
            particle.style.borderRadius = '50%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particle.style.pointerEvents = 'none';
            particle.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
            particle.style.zIndex = '-1';
            container.appendChild(particle);
        }
    };

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            animation: ripple 0.6s ease-out;
        }
    `;
    document.head.appendChild(style);

    // Optional: uncomment to enable particles
    // createParticles();

    // Text glitch effect disabled - causing issues on hover
    // Original glitch effect removed
});
