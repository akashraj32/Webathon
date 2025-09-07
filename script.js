// Mobile menu toggle functionality
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-white', 'shadow-lg');
    }
});

// Join Us button functionality
document.getElementById('joinBtn').addEventListener('click', function() {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
    });
    
    // Pre-fill form with join inquiry
    document.getElementById('subject').value = 'Join ACM Chapter Inquiry';
    document.getElementById('message').value = 'Hello, I am interested in joining the ACM College Chapter. Could you please provide information on membership, requirements, and upcoming activities? Thank you!';
    
    alert('Welcome! We\'ve pre-filled a message in the contact form. Please provide your name and email, then send it!');
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission (in a real scenario, this would be an AJAX call)
    alert(Thank you, ${name}! Your message has been sent. We'll get back to you soon.);
    
    // Clear the form
    this.reset();
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-hover, .member-img, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Event hover effects
document.querySelectorAll('#events .card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Blog image parallax effect (subtle)
document.querySelectorAll('.blog-card img').forEach(img => {
    window.addEventListener('scroll', function() {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const scrollTop = window.pageYOffset;
            const rate = scrollTop * -0.5;
            img.style.transform = translateY(${rate},px);
        }
    });
});

// Project card click handler (for demonstration)
document.querySelectorAll('#projects .bg-gray-100').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        alert(You're viewing details for "${title}". This would normally navigate to a detailed project page.);
    });
});

// Prevent default link behavior for demo links
document.querySelectorAll('#blogs a, #projects a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This would normally navigate to the full article/project page. Great choice! ✋');
    });
});

// Back-to-top button (optional addition, can be implemented if needed)
function toggleBackToTop() {
    const button = document.createElement('button');
    button.textContent = '↑ Top';
    button.className = 'fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full hidden transition duration-300 hover:bg-blue-700';
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    });
}

// Initialize back-to-top (commented out by default)
// toggleBackToTop();

// Contact form real-time validation
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.classList.add('border-red-500');
        } else {
            this.classList.remove('border-red-500');
            this.classList.add('border-green-500');
        }
    });
});

// Member card hover effect
document.querySelectorAll('.member-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation for large images (if needed)
// This could be implemented for better UX on slower connections

// Accessibility enhancement: Keyboard navigation for mobile menu
document.getElementById('mobile-menu-toggle').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
});