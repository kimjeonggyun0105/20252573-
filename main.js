window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('mobile-active');
            
            // Toggle icon between bars and times
            if (nav.classList.contains('mobile-active')) {
                menuBtn.textContent = '✕';
            } else {
                menuBtn.textContent = '☰';
            }
        });
    }

    // Carousel buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const quickLinks = document.querySelector('.quick-links');

    if (prevBtn && nextBtn && quickLinks) {
        prevBtn.addEventListener('click', () => {
            quickLinks.scrollBy({ left: -200, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            quickLinks.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
});

// Carousel logic is handled inside DOMContentLoaded above.

// Simple reveal animation for link items on load
document.querySelectorAll('.link-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 1000 + (index * 100));
});
