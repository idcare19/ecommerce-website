/**
 * active-nav-link.js
 * Manages the 'active-link' class on navigation items based on the current URL.
 */

function updateActiveNavLink() {
    // Get the current page's filename (e.g., 'index.html', 'about.html')
    // We use window.location.pathname.split('/').pop() to get the last part of the URL.
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Normalize empty path (root URL) to 'index.html'
    if (currentPath === '' || currentPath === '/') {
        currentPath = 'index.html';
    }
    
    // Convert all URLs to lowercase for case-insensitive comparison
    const targetPath = currentPath.toLowerCase();

    // 1. Find all navigation links within the custom list
    // This selector targets links inside the <ul class="navbar-nav mx-auto nav-links-custom">
    const navLinks = document.querySelectorAll('.nav-links-custom .nav-link');

    navLinks.forEach(link => {
        // 2. Get the link's target path
        let linkHref = link.getAttribute('href');

        // Normalize link hrefs:
        // - Get only the filename part
        // - Replace '#' with 'index.html' if it's the home link
        let linkPath = (linkHref === '#' || linkHref === 'index.html') 
                       ? 'index.html' 
                       : (linkHref ? linkHref.split('/').pop().toLowerCase() : '');

        // 3. Remove the active class from all links first
        link.classList.remove('active-link');

        // 4. Check if the link's target matches the current page's path
        if (linkPath === targetPath) {
            link.classList.add('active-link');
        }
    });
}

// 5. Run the function when the page loads
window.addEventListener('load', updateActiveNavLink);