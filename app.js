// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// ************ project slideshow ************
// projects data
const projects = [
  {
    id: 1,
    img: './img/sticky-note.png',
    name: 'Super Sticky Notes',
    link: 'https://gsti6.csb.app/',
    description: `Greenfield project creating a sticky notes app. Multiple components used to build the classy sticky note UI with the ability to add, edit, delete, and search for notes.`,
    skills: 'Skills: React, JSX',
    tools: 'Tools: CodeSandbox',
  },
  {
    id: 2,
    img: './img/github-repo-gallery.jpg',
    name: 'GitHub Repo Gallery',
    link: 'https://lilyyee.github.io/Github-Repo-Gallery/',
    description: `GitHub's API used to pull data from my GitHub portfolio to create a gallery of repos. Users can click on the repos to see more details and a link to the repo.`,
    skills: 'Skills: JavaScript',
    tools: 'Tools: REST API, GitHub',
  },
  {
    id: 3,
    img: './img/guess-the-word-game.png',
    name: 'Guess The Word Game',
    link: 'https://lilyyee.github.io/Guess-The-Word/',
    description: `Players guess the word by entering one letter at a time. If the player guesses all the letters correctly before they use up their guesses, they win!`,
    skills: 'Skills: JavaScript',
    tools: 'Tools: JSON',
  },
  {
    id: 4,
    img: './img/unplugged.png',
    name: 'Unplugged',
    link: 'https://lilyyee.github.io/Unplugged-Retreat/',
    description: `Multi-page responsive website coded with Flexbox. This versatile design has several sections that can be repurposed for different sites.`,
    skills: 'Skills: HTML, CSS, Flexbox',
    tools: 'Tools: Photoshop, Chrome DevTools',
  },
  {
    id: 5,
    img: './img/rogue-pickings.png',
    name: 'Rogue Pickings',
    link: 'https://lilyyee.github.io/Rogue-Pickings-Responsive/',
    description: `A simple home page perfect for a small business. Originally a static website, I converted it into a responsive design using Flexbox.`,
    skills: 'Skills: HTML, CSS, Flexbox',
    tools: 'Tools: Photoshop, Chrome DevTools',
  },
];

// select items
const img = document.getElementById('project-img');
const projectName = document.getElementById('project-name');
const link = document.getElementById('project-link');
const description = document.getElementById('project-description');
const skills = document.getElementById('project-skills');
const tools = document.getElementById('project-tools');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showProject(currentItem);
});

// show project based on item
function showProject(project) {
  const item = projects[project];
  img.src = item.img;
  projectName.textContent = item.name;
  link.href = item.link;
  description.textContent = item.description;
  skills.textContent = item.skills;
  tools.textContent = item.tools;
}

// show next project
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
});

// show previous project
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showProject(currentItem);
});

// show random project
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * projects.length);
  showProject(currentItem);
});
