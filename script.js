// Mobile Navigation & Smooth Scrolling are initialized later via init functions

// Navbar background change on scroll - Fixed to maintain transparency
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(196, 57, 43, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(196, 57, 43, 0.15)';
    }
});

// Animations are initialized later via initScrollAnimations

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thanks for subscribing! We'll keep you updated with our latest news and special offers.</p>
        `;
        successMessage.style.cssText = `
            background: linear-gradient(135deg, #d4af37, #b8860b);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-top: 20px;
            animation: fadeInUp 0.5s ease;
        `;
        
        newsletterForm.appendChild(successMessage);
        newsletterForm.querySelector('input[type="email"]').value = '';
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Add loading animation for images
window.addEventListener('load', () => {
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.style.opacity = '1';
        placeholder.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effect to menu categories
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        });
    });
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #d4af37, #b8860b);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Initialize scroll progress bar
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu with Escape key
        const hamburgerEl = document.querySelector('.hamburger');
        const navMenuEl = document.querySelector('.nav-menu');
        if (hamburgerEl && navMenuEl) {
            hamburgerEl.classList.remove('active');
            navMenuEl.classList.remove('active');
        }
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid rgb(206, 182, 105)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add smooth reveal animation for sections
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.pageYOffset;
        
        if (scrollY + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});

// Add loading state for form submission
const addLoadingState = (form) => {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
    
    // Reset after 3 seconds (simulate form submission)
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
    }, 3000);
};

// Apply loading state to newsletter form
if (newsletterForm) {
    newsletterForm.addEventListener('submit', () => {
        addLoadingState(newsletterForm);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu category functionality
    initMenuCategories();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();

    // Back-to-top button behavior
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        const toggleBackToTop = () => {
            if (window.scrollY > 300) backToTopBtn.classList.add('show');
            else backToTopBtn.classList.remove('show');
        };
        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Active nav highlight on scroll
    const sectionIds = ['home', 'about', 'menu', 'hours', 'contact'];
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));
    const idToLink = new Map(navLinks.map(a => [a.getAttribute('href')?.replace('#',''), a]));

    const updateActiveNav = () => {
        let current = null;
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) current = id;
        });
        navLinks.forEach(a => a.classList.remove('active'));
        if (current && idToLink.get(current)) idToLink.get(current).classList.add('active');
    };
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Google Sheets reservation submission + same-day warning
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        const successEl = document.getElementById('reservationSuccess');
        const dateInput = document.getElementById('reservationDate');
        const todayWarning = document.getElementById('todayWarning');

        const updateTodayWarning = () => {
            if (!dateInput || !todayWarning) return;
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const todayStr = `${yyyy}-${mm}-${dd}`;
            todayWarning.style.display = dateInput.value === todayStr ? 'block' : 'none';
        };
        if (dateInput) {
            dateInput.addEventListener('change', updateTodayWarning);
            updateTodayWarning();
        }

        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(reservationForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Replace with your Apps Script Web App URL when ready
                const endpoint = window.RESERVATION_SHEETS_WEBAPP_URL || '';
                if (!endpoint) {
                    console.warn('Reservation endpoint not configured. Set window.RESERVATION_SHEETS_WEBAPP_URL.');
                    successEl.style.display = 'block';
                    successEl.textContent = 'Form captured locally (configure Google Sheets endpoint).';
                    return;
                }

                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (res.ok) {
                    successEl.style.display = 'block';
                    reservationForm.reset();
                    updateTodayWarning();
                } else {
                    successEl.style.display = 'block';
                    successEl.style.color = '#e74c3c';
                    successEl.textContent = 'There was an issue sending your request. Please try again.';
                }
            } catch (err) {
                successEl.style.display = 'block';
                successEl.style.color = '#e74c3c';
                successEl.textContent = 'Network error. Please try again.';
            }
        });
    }
});

// Menu Category Functionality
function initMenuCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    console.log('Found category buttons:', categoryButtons.length);
    console.log('Found menu categories:', menuCategories.length);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');
            console.log('Clicked category:', targetCategory);
            
            // Remove active class from all buttons and categories
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked button and corresponding category
            button.classList.add('active');
            const targetElement = document.getElementById(targetCategory);
            if (targetElement) {
                targetElement.classList.add('active');
                console.log('Activated category:', targetCategory);
            } else {
                console.error('Category element not found:', targetCategory);
            }
        });
    });
}

// Mobile Navigation Functions
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a navigation link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling Function
function initSmoothScrolling() {
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
}

// Scroll Animations Function
function initScrollAnimations() {
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

    const animateElements = document.querySelectorAll('.about-content, .hours-card, .happy-hour-card, .menu-category, .gallery-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Stagger animation delays for menu categories
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
    });
}

