document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navCategories = document.querySelector('.nav-categories');
    const navSearch = document.querySelector('.nav-search');

    hamburgerMenu.addEventListener('click', () => {
        const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
        hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
        navCategories.classList.toggle('active');
        navSearch.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInside = navCategories.contains(event.target) || 
                            hamburgerMenu.contains(event.target) ||
                            navSearch.contains(event.target);

        if (!isClickInside && window.innerWidth < 768) {
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            navCategories.classList.remove('active');
            navSearch.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            navCategories.classList.remove('active');
            navSearch.classList.remove('active');
        }
    });
});