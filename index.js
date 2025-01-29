/*
vegetarian restaurant website, dine in and carry out, methods and approach

vegetarian sandwich shop, serve sandwiches, appetizers, dessert, pasta.
hamburger menu, with menu, order/pickup now, about us, help, job application page, account creation system, google maps integration with address?
reference page required. Menu: salads, tofu
*/

/*

*/


// JavaScript for Vegetarian Website

// Toggle the navigation menu for small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const sections = document.querySelectorAll('.hero, .menu, .about, .contact, .cat-cafe');

function checkScroll() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); //
