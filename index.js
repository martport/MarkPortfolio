// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Scroll fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for your message! I’ll get back to you soon.");
    this.reset();
});
