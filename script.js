// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? '🌞 Light Mode' : '🌙 Dark Mode';
    darkModeToggle.textContent = currentMode;
});

// Smooth Scroll for Navigation Links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
