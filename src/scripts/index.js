import 'regenerator-runtime';

// Import CSS
import '../styles/main.css';

// Navbar Toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('open');
  navbarLinks.classList.toggle('active');
});
