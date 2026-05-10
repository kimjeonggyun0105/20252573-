// Custom Cursor Logic
const dot = document.getElementById('cursor-dot');
const blob = document.getElementById('cursor-blob');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  
  dot.style.transform = `translate(${x}px, ${y}px)`;
  
  // Smooth delay for blob
  setTimeout(() => {
    blob.style.transform = `translate(${x}px, ${y}px)`;
  }, 50);
});

// Cursor interaction with links
const links = document.querySelectorAll('a, .year-card');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    dot.style.width = '30px';
    dot.style.height = '30px';
    dot.style.background = 'rgba(0, 243, 255, 0.2)';
    dot.style.border = '1px solid var(--cyan)';
  });
  link.addEventListener('mouseleave', () => {
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.background = 'var(--cyan)';
    dot.style.border = 'none';
  });
});

// Scroll Reveal Logic
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').substring(1) === current) {
      a.classList.add('active');
    }
  });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
