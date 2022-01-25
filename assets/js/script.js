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

const works = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageURL: './assets/img/snapshoot1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/ahangarha',
  },
  {
    name: 'Uber Navigation',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imageURL: './assets/img/snapshoot2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/ahangarha',
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    imageURL: './assets/img/snapshoot3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/ahangarha',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imageURL: './assets/img/snapshoot4.png',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/ahangarha',
  },
];

const worksSection = document.getElementById('works');

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li>${tech}</li>`; });

  worksSection.innerHTML += `<div class="works-card">
        <img src="${work.imageURL}" alt="${work.name} snapshot" />
        <div class="info">
          <div class="title">
            <h2>${work.name}</h2>
            <div class="meta">
              <span>canopy</span>
              <i class="fa fa-circle"></i>
              <span>Back End Dev</span>
              <i class="fa fa-circle"></i>
              <span>2015</span>
            </div>
          </div>

          <p class="description">
            ${work.description}
          </p>

          <ul class="techs">
            ${techs}
          </ul>

          <div class="action">
            <a href="" class="btn" id="${work.name}"> See Project </a>
          </div>
        </div>
      </div>
    `;
});
