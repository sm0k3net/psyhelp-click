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

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Hero slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Chat modal functionality
function openWebChat() {
    const modal = document.getElementById('chatModal');
    const iframe = document.getElementById('chatFrame');
    iframe.src = 'https://agent.sm0k3.net/webhook/1109d3cb-4ec6-4d28-9c14-203e85ce212d/chat';
    modal.style.display = 'block';
}

function closeChat() {
    const modal = document.getElementById('chatModal');
    const iframe = document.getElementById('chatFrame');
    modal.style.display = 'none';
    iframe.src = '';
}

// Close chat modal
document.querySelector('.chat-close').addEventListener('click', closeChat);

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('chatModal');
    if (event.target === modal) {
        closeChat();
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.email || !data.topic) {
        alert('Пожалуйста, заполните обязательные поля (Email и Тема)');
        return;
    }
    
    // Simulate form submission
    alert('Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Add smooth reveal animation to advantage items
document.querySelectorAll('.advantage-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fadeInUp');
});