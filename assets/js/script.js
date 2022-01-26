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

// Remove warning for javascript being disabled on the browser
worksSection.innerHTML = '';

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
            <a href="#" class="btn" id="${work.name}"> See Project </a>
          </div>
        </div>
      </div>
    `;
});

works.forEach((work) => {
  let techs = '';
  work.technologies.forEach((tech) => { techs += `<li>${tech}</li>`; });

  document.getElementById(work.name).addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      document.body.classList.toggle('blury');

      document.getElementById('popup-wrapper').innerHTML = `
      <div id="work-popup-wrapper" class="">
        <div class="blended-bg"></div>
        <div id="work-popup">
          <div class="work-popup-content">
            <a href="#" id="close-popup-btn" onclick=""><img src="./assets/img/icon-close-dark.svg" alt=""></a>
            <div>
              <h2>${work.name}</h2>
              <div class="meta">
                <span>canopy</span>
                <i class="fa fa-circle"></i>
                <span>Back End Dev</span>
                <i class="fa fa-circle"></i>
                <span>2015</span>
              </div>
            </div>

            <img class="work-image" src="${work.imageURL}" alt="Project 1 snapshot" />
            
            <div class="info">
              <p class="description">
                ${work.description}
              </p>
              
              <div class="techs-n-action">
                <ul class="techs">
                  ${techs}
                </ul>
                <div class="action">
                  <a href="${work.liveURL}" target="_blank" class="btn">See Live <i class="fa fa-link"></i></a>
                  <a href="${work.sourceURL}" target="_blank" class="btn">See Source <i class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      document.getElementById('close-popup-btn').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('popup-wrapper').innerHTML = '';
        document.body.classList.toggle('blury');
      });
    },
  );
});

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (contactForm.elements.email.value === contactForm.elements.email.value.toLowerCase()) {
    contactForm.submit();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please insert email address in lowercase!';
    contactForm.insertBefore(errorMessage, contactForm.querySelector('button'));
  }
});

// Handle form data in the browser's localstorage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

if (storageAvailable('localStorage')) {
  const contactFormData = {
    name: '',
    email: '',
    message: '',
  };

  const fields = document.querySelectorAll('#contact input, #contact textarea');
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      contactFormData[field.name] = field.value;
      window.localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
    });
  });
}