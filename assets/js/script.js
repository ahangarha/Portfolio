const mobileMenu = document.querySelector('.mobile-menu');

document.querySelector('.menu-toggle').addEventListener(
  'click', (event) => {
    mobileMenu.style.display = 'block';
    document.body.classList.toggle('blury');
  }
);

document.getElementById('close-mobile-menu-btn').addEventListener(
  'click', (event) => {
    event.preventDefault();
    mobileMenu.style.display = 'none';
    document.body.classList.toggle('blury');
  }
);

document.querySelectorAll('.mobile-menu-content li a').forEach(
  link => {
    link.addEventListener('click', (event) => {
      mobileMenu.style.display = 'none';
      document.body.classList.toggle('blury');
    });
  }
);
