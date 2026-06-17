// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        mobileMenu.style.display = 'block';
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Active Link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Navbar shadow and padding on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Create pre-filled email content
    const subject = `New Service Request: ${formData.get('service')}`;
    const body = `Name: ${formData.get('name')}
Phone: ${formData.get('phone')}
Service Needed: ${formData.get('service')}

Message: 
${formData.get('message')}`;
    
    // Open default email client
    window.location.href = `mailto:flowmasterplumbinginc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success and reset
    setTimeout(() => {
        alert('Your email client has been opened! Please click send to submit your request.');
        form.reset();
    }, 500);
});

// Fade-in animation observer
const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
