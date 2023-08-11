// Navigation
// Define variables
const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu a, .nav__close');

// Load event listenters
allEventListeners();

// Function
function allEventListeners() {
    navButton.addEventListener('click', navButtonToggle);
    navLinks.forEach(elem => elem.addEventListener('click', navLinkToggle));
}

function navButtonToggle() {
    navMenu.classList.toggle('open');
}

function navLinkToggle() {
    if(navMenu.classList.contains('open')) {
        navButton.click();
    }
}