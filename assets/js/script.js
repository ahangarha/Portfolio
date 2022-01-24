const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  document.body.classList.toggle('blury');
}

document.querySelector('.menu-toggle').addEventListener(
  'click', () => {
    toggleMenu();
  },
);

document.getElementById('close-mobile-menu-btn').addEventListener(
  'click', (event) => {
    event.preventDefault();
    toggleMenu();
  },
);

document.querySelectorAll('.mobile-menu-content li a').forEach(
  (link) => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  },
);
