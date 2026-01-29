// Navigation toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll animation for sections
function checkScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scroll for back to top
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Function to animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Initialize animations
window.addEventListener('load', () => {
    checkScroll();
    animateSkillBars();
});

window.addEventListener('scroll', checkScroll);

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Project section scroll functionality
function initProjectScroll() {
    const projectsContainer = document.querySelector('.projects-container');
    const leftScrollBtn = document.querySelector('.left-scroll');
    const rightScrollBtn = document.querySelector('.right-scroll');
    
    if (!projectsContainer || !leftScrollBtn || !rightScrollBtn) return;
    
    const scrollAmount = 300;
    
    // Right scroll button
    rightScrollBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Left scroll button
    leftScrollBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Show/hide buttons based on scroll position
    function updateScrollButtons() {
        const scrollLeft = projectsContainer.scrollLeft;
        const scrollWidth = projectsContainer.scrollWidth;
        const clientWidth = projectsContainer.clientWidth;
        
        // Show/hide left button
        if (scrollLeft > 0) {
            leftScrollBtn.style.opacity = '0.8';
            leftScrollBtn.style.pointerEvents = 'auto';
        } else {
            leftScrollBtn.style.opacity = '0.3';
            leftScrollBtn.style.pointerEvents = 'none';
        }
        
        // Show/hide right button
        if (scrollLeft < scrollWidth - clientWidth - 10) {
            rightScrollBtn.style.opacity = '0.8';
            rightScrollBtn.style.pointerEvents = 'auto';
        } else {
            rightScrollBtn.style.opacity = '0.3';
            rightScrollBtn.style.pointerEvents = 'none';
        }
    }
    
    // Update buttons on scroll
    projectsContainer.addEventListener('scroll', updateScrollButtons);
    
    // Update buttons on resize
    window.addEventListener('resize', updateScrollButtons);
    
    // Initial update
    updateScrollButtons();
}

// Add keyboard navigation for projects
function addKeyboardNavigation() {
    const projectsContainer = document.querySelector('.projects-container');
    
    if (!projectsContainer) return;
    
    projectsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            projectsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            projectsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    });
    
    // Make project cards focusable
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
    });
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    checkScroll();
    animateSkillBars();
    initProjectScroll();
    addKeyboardNavigation();
    
    // Add touch/swipe support for mobile
    addTouchSupport();
});

// Add touch support for mobile swipe
function addTouchSupport() {
    const projectsContainer = document.querySelector('.projects-container');
    
    if (!projectsContainer) return;
    
    let startX = 0;
    let scrollLeft = 0;
    
    projectsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
    });
    
    projectsContainer.addEventListener('touchmove', (e) => {
        if (!e.touches.length) return;
        const x = e.touches[0].pageX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        projectsContainer.scrollLeft = scrollLeft - walk;
    });
}

// Keep your existing event listeners
window.addEventListener('scroll', checkScroll);