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




// Certificates section scroll functionality
function initCertificatesScroll() {
    const certsContainer = document.querySelector('.certificates-container');
    const leftCertBtn = document.querySelector('.left-scroll-cert');
    const rightCertBtn = document.querySelector('.right-scroll-cert');

    if (!certsContainer || !leftCertBtn || !rightCertBtn) return;

    const scrollAmount = 300;

    // Right scroll button for certificates
    rightCertBtn.addEventListener('click', () => {
        certsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Left scroll button for certificates
    leftCertBtn.addEventListener('click', () => {
        certsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Show/hide buttons based on scroll position for certificates
    function updateCertScrollButtons() {
        const scrollLeft = certsContainer.scrollLeft;
        const scrollWidth = certsContainer.scrollWidth;
        const clientWidth = certsContainer.clientWidth;

        // Show/hide left button
        if (scrollLeft > 0) {
            leftCertBtn.style.opacity = '0.8';
            leftCertBtn.style.pointerEvents = 'auto';
        } else {
            leftCertBtn.style.opacity = '0.3';
            leftCertBtn.style.pointerEvents = 'none';
        }

        // Show/hide right button
        if (scrollLeft < scrollWidth - clientWidth - 10) {
            rightCertBtn.style.opacity = '0.8';
            rightCertBtn.style.pointerEvents = 'auto';
        } else {
            rightCertBtn.style.opacity = '0.3';
            rightCertBtn.style.pointerEvents = 'none';
        }
    }

    // Update buttons on scroll for certificates
    certsContainer.addEventListener('scroll', updateCertScrollButtons);

    // Update buttons on resize for certificates
    window.addEventListener('resize', updateCertScrollButtons);

    // Initial update for certificates
    updateCertScrollButtons();
}

// Certificate modal functionality
function initCertificateModal() {
    const certificateCards = document.querySelectorAll('.certificate-card img');
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="" alt="Certificate">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeModal = modal.querySelector('.close-modal');

    // Open modal on certificate image click
    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            modalImg.src = card.src;
            modalImg.alt = card.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Add keyboard navigation for certificates
function addCertificatesKeyboardNavigation() {
    const certsContainer = document.querySelector('.certificates-container');

    if (!certsContainer) return;

    certsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            certsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            certsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    });

    // Make certificate cards focusable
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.setAttribute('tabindex', '0');
    });
}

// Add touch support for certificates swipe
function addCertificatesTouchSupport() {
    const certsContainer = document.querySelector('.certificates-container');

    if (!certsContainer) return;

    let startX = 0;
    let scrollLeft = 0;

    certsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - certsContainer.offsetLeft;
        scrollLeft = certsContainer.scrollLeft;
    });

    certsContainer.addEventListener('touchmove', (e) => {
        if (!e.touches.length) return;
        const x = e.touches[0].pageX - certsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        certsContainer.scrollLeft = scrollLeft - walk;
    });
}

// Update the initialization function
window.addEventListener('load', () => {
    checkScroll();
    animateSkillBars();
    initProjectScroll();
    addKeyboardNavigation();
    addTouchSupport();

    // Initialize certificates section
    initCertificatesScroll();
    initCertificateModal();
    addCertificatesKeyboardNavigation();
    addCertificatesTouchSupport();

    // Update all scroll buttons on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            setTimeout(() => {
                if (typeof updateScrollButtons === 'function') updateScrollButtons();
                if (typeof updateCertScrollButtons === 'function') updateCertScrollButtons();
            }, 100);
        }
    });

    // Visitor counter
    initVisitorCounter();
});

// =============================================
//  VISITOR COUNTER — works on GitHub Pages
//  Local file:// → shows info message
//  Live https:// → fetches real count + animates
// =============================================
function initVisitorCounter() {
    const spinner = document.getElementById('visitorSpinner');
    const countEl = document.getElementById('visitorCount');
    const display = document.getElementById('visitorDisplay');
    if (!spinner || !countEl || !display) return;

    // Running locally — API calls blocked on file://
    if (window.location.protocol === 'file:') {
        display.innerHTML = `
            <div class="visitor-local-msg">
                <i class="fas fa-cloud-upload-alt"></i>
                Push to GitHub Pages to<br>see the live visitor count
            </div>`;
        return;
    }

    // Live HTTPS site — hit API to increment + show count
    fetch('https://api.counterapi.dev/v1/josephmohan110/joseph-mohan-portfolio/up')
        .then(res => { if (!res.ok) throw new Error(); return res.json(); })
        .then(data => {
            const total = data.count || 0;
            spinner.style.display = 'none';
            countEl.style.display = 'inline-block';
            animateCount(countEl, total);
        })
        .catch(() => {
            display.innerHTML = `
                <div class="visitor-local-msg">
                    <i class="fas fa-wifi"></i>
                    Could not load count.<br>Check your connection.
                </div>`;
        });
}

// Smooth ease-out count-up animation
function animateCount(el, target) {
    const dur = 200;
    const t0 = performance.now();
    (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString();
    })(t0);
}
