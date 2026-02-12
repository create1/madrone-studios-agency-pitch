// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-up class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});

// Parallax effect for hero and section backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax for section background images
    const sections = document.querySelectorAll('.section-background');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollPercent = (rect.top / window.innerHeight) - 0.5;
        const img = section.querySelector('.section-bg-image');
        if (img && rect.top < window.innerHeight && rect.bottom > 0) {
            img.style.transform = `translateY(${scrollPercent * 50}px) scale(1.1)`;
        }
    });
});

// Smooth scroll for navigation
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

// Add scroll-based navbar transparency
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Stagger animation delays for grid items
const staggerElements = () => {
    const grids = document.querySelectorAll('.services-grid, .cases-grid, .budget-table');
    
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.fade-up');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
};

document.addEventListener('DOMContentLoaded', staggerElements);

// Add cursor trail effect (optional - can be removed if too much)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create custom cursor element
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(212, 175, 55, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    mix-blend-mode: difference;
`;
document.body.appendChild(cursor);

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Scale cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-item, .case-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Add subtle floating animation to case cards
const caseCards = document.querySelectorAll('.case-card');
caseCards.forEach((card, index) => {
    setInterval(() => {
        const offset = Math.sin(Date.now() / 1000 + index) * 5;
        card.style.transform = `translateY(${offset}px)`;
    }, 50);
});

// Number counter animation for stats
const animateNumbers = (element, target) => {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
};

// Observe stats for number animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statText = entry.target.textContent;
            const match = statText.match(/[\d.]+[MK]?/);
            if (match) {
                let value = parseFloat(match[0]);
                if (statText.includes('M')) value *= 1000000;
                if (statText.includes('K')) value *= 1000;
                // animateNumbers(entry.target, value);
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add sparkle effect on hover for important elements
const addSparkle = (e) => {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(212, 175, 55, 0.8);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: sparkleFloat 1s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
};

// Add sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        to {
            transform: translateY(-100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add sparkles to special elements on hover
document.querySelectorAll('.section-title, .hero-title').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            addSparkle(e);
        }
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
