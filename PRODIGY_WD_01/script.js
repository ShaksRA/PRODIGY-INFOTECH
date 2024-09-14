document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const navLinks = nav.getElementsByTagName('a');

    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for navigation links
    Array.from(navLinks).forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});