// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        
        // Toggle body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el) el.textContent = currentYear;
    });
    
    // Add smooth scrolling to all links with hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.dish-card, .stat-item, .bar-item, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.dish-card, .stat-item, .bar-item, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Add floating animation to some elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
        el.style.animation = 'float 3s ease-in-out infinite';
    });
});

// Form validation for reservation page
if (document.querySelector('.reservation-form')) {
    document.querySelector('.reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const guests = document.getElementById('guests').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        if (!name || !email || !phone || !guests || !date || !time) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your reservation! We will contact you shortly to confirm.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.reset();
        }, 1500);
    });
}
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.dish-card, .bar-item, .info-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
    
    // Add floating icons animation enhancement
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        // Randomize animation duration and delay
        const duration = 6 + Math.random() * 4;
        const delay = Math.random() * 5;
        icon.style.animationDuration = `${duration}s`;
        icon.style.animationDelay = `${delay}s`;
    });
});
// Floating icons animation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating icons if they exist
    const floatingIcons = document.querySelectorAll('.floating-icon');
    if (floatingIcons.length > 0) {
        floatingIcons.forEach((icon, index) => {
            // Remove any existing animation
            icon.style.animation = 'none';
            
            // Trigger reflow
            icon.offsetHeight;
            
            // Add animation with delay
            icon.style.animation = `float 5s ease-in-out ${index * 0.3}s infinite`;
        });
    }
    
    // Add scroll effect to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for hero content
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${rate * 0.5}px)`;
            }
            
            // Parallax effect for floating icons
            floatingIcons.forEach((icon, index) => {
                const speed = 0.3 + (index * 0.1);
                icon.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }
});


// Back to top button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('fade-out');
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Hero slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-nav-btn.prev');
    const nextBtn = document.querySelector('.slider-nav-btn.next');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % heroSlides.length;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(prevIndex);
    }
    
    // Start auto-sliding
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto-sliding when user interacts
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    // Initialize slider
    if (heroSlides.length > 0) {
        showSlide(0);
        startSlider();
        
        // Next/Previous buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                stopSlider();
                nextSlide();
                startSlider();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlider();
                prevSlide();
                startSlider();
            });
        }
        
        // Dots navigation
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });
        
        // Pause slider on hover
        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', stopSlider);
            heroSlider.addEventListener('mouseleave', startSlider);
        }
    }
    
    // Testimonials slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialPrevBtn = document.querySelector('.testimonial-nav-btn.prev');
    const testimonialNextBtn = document.querySelector('.testimonial-nav-btn.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    if (testimonialCards.length > 0) {
        showTestimonial(0);
        
        // Testimonial navigation
        if (testimonialNextBtn) {
            testimonialNextBtn.addEventListener('click', function() {
                let nextIndex = (currentTestimonial + 1) % testimonialCards.length;
                showTestimonial(nextIndex);
            });
        }
        
        if (testimonialPrevBtn) {
            testimonialPrevBtn.addEventListener('click', function() {
                let prevIndex = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
                showTestimonial(prevIndex);
            });
        }
        
        // Testimonial dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            let nextIndex = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(nextIndex);
        }, 6000);
    }
    
    // Back to Top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations with Intersection Observer
    const animateElements = document.querySelectorAll('.animate__animated');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-animation') || 'fadeInUp';
                entry.target.classList.add(`animate__${animationType}`);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.featured-card, .dish-card, .bar-item, .about-text, .about-image, .contact-info, .contact-map, .cta-content').forEach(el => {
        el.setAttribute('data-animation', 'fadeInUp');
        observer.observe(el);
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for subscribing with email: ${email}`);
            this.reset();
        });
    }
    
    // Add hover effect to dish cards
    document.querySelectorAll('.dish-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to gold text elements
    document.querySelectorAll('.gold-text').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect for hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled * 0.002);
            }
        }
    });
});