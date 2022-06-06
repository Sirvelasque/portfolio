const hamburguer = document.getElementById('hamburguer');
let displaying = false;

// Created all elements of the menu
const menuContainer = document.createElement('nav');
const item1Container = document.createElement('div');
const item2Container = document.createElement('div');
const item3Container = document.createElement('div');
const item1 = document.createElement('a');
const item2 = document.createElement('a');
const item3 = document.createElement('a');
const navArrow1 = document.createElement('div');
const navArrow2 = document.createElement('div');
const navArrow3 = document.createElement('div');
const navBackground2 = document.createElement('div');
const navBackground1 = document.createElement('div');
menuContainer.append(item2Container);
menuContainer.appendChild(item1Container);
menuContainer.appendChild(item3Container);

// Give classes and values
menuContainer.id = 'menuContainer';
menuContainer.classList.add('display_none');
navArrow1.classList.add('nav_arrow');
navArrow1.innerText = '>';
navArrow2.classList.add('nav_arrow');
navArrow2.innerText = '>';
navArrow3.classList.add('nav_arrow');
navArrow3.innerText = '>';

// background
menuContainer.appendChild(navBackground1);
menuContainer.appendChild(navBackground2);
navBackground1.classList.add('nav_elipse1');
navBackground2.classList.add('nav_elipse2');

item1Container.classList.add('item_container');
item1.classList.add('nav_text');
item1.innerText = 'Portfolio';
item1.href = '#works';
item1Container.appendChild(item1);
item1Container.appendChild(navArrow1);

item2Container.classList.add('item_container');
item2.classList.add('nav_text');
item2.innerText = 'About';
item2.href = '#headline';
item2Container.appendChild(item2);
item2Container.appendChild(navArrow2);

item3Container.classList.add('item_container');
item3.classList.add('nav_text');
item3.innerText = 'Contact';
item3.href = '#contact';
item3Container.appendChild(item3);
item3Container.appendChild(navArrow3);
//
document.body.append(menuContainer);

// bar icon click event

function toggleNavManu() {
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
  hamburguer.classList.toggle('fa-times');
  hamburguer.classList.toggle('fa-bars');
}

hamburguer.addEventListener('click', toggleNavManu);
item1Container.addEventListener('click', toggleNavManu);
item2Container.addEventListener('click', toggleNavManu);
item3Container.addEventListener('click', toggleNavManu);

const cards = [
  {
    title: 'Updanime',
    description:
    "<span class='description-3'>In this single page website you can see 6 genres and pick one to navigate to the next area where you will find a filtered list of series with their Synopsis, a Picture and Score. If you get hooked by one you can get more details by clicking it.</span>",
    skills: ['html', 'css', 'javascript', 'React-Redux'],
    image: 'img/projects/Updanime.PNG',
    live: 'https://629d45064bf92c00080a1368--lucky-phoenix-71c99d.netlify.app',
    source: 'https://github.com/Sirvelasque/info-anime-webapp/tree/Asemble',
    imageMain: 'img/projects/Updanime.PNG',
  },
  {
    title: 'Global Summit Page',
    description:
      "<span class='description-3'>This website is a good example of a summit page made following a pre-structured and responsive design. Here you can see the main page and navigate to the about page and back to Home with the top-loft Logo. <br> The featured speakers' section is coded dynamically to be able to add new speakers without problems.<br>You can access the about page by the about button in the navigation bar, there you will find information about the organization and previews summits</span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/projects/GlobalSubmitP.png',
    live: 'https://sirvelasque.github.io/capstonePage/',
    source: 'https://github.com/Sirvelasque/capstonePage',
    imageMain: 'img/projects/GlobalSubmit.png',
  },
  {
    title: 'Space Travelers',
    description:
      "<span class='description-3'>In this website you can navigate through the Rockets and Missions sections to resevate a rocket or join a mission with a friendly interface and a simulated profile to see you current activity on the website</span>",
    skills: ['html', 'css', 'javascript', 'React-Redux'],
    image: 'img/projects/space.PNG',
    live: '#',
    source: '#',
    imageMain: 'img/projects/spaceP.PNG',
  },
  {
    title: 'Math Magicians',
    description:
      "<span class='description-3'>In this single page website you can find a home section, a calculator and a Quote section with a clever phrase </span>",
    skills: ['html', 'css', 'javascript', 'React'],
    image: 'img/projects/Math.PNG',
    live: 'https://intense-lowlands-78762.herokuapp.com/#/Calculator',
    source: 'https://github.com/Sirvelasque/math_magicians',
    imageMain: 'img/projects/Math.PNG',
  },
  {
    title: 'BookStore',
    description:
      "<span class='description-3'>In this App you can add and delete books from a list that is being stored in an API by title, author and genre, and simulates reading progress</span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/projects/books.PNG',
    live: 'https://629d7228b6d18e3860d005b0--superb-cranachan-8abd9d.netlify.app',
    source: 'https://github.com/Sirvelasque/Bookstore',
    imageMain: 'img/projects/books.PNG',
  },
];

// save buttons in an array
let workButtons = [];
workButtons = document.querySelectorAll('.work-buttom');

//  Creating pop up containers
const popupContainer = document.createElement('section');
popupContainer.id = 'popupContainer';
const mobileModal = document.createElement('article');
mobileModal.id = 'mobileModal';
popupContainer.appendChild(mobileModal);

// Create variables and x icon

const exitIcon = document.createElement('div');
exitIcon.innerHTML = '<i id="popupxIcon" class="fas fa-times"></i>';
exitIcon.classList.add('exitButton');
popupContainer.appendChild(exitIcon);
let title;
let description;
let skills = [];
let image;
let live;
let source;

function asignValues(index) {
  title = cards[index].title;
  description = cards[index].description;
  skills = cards[index].skills;
  image = cards[index].image;
  live = cards[index].live;
  source = cards[index].source;
}
// create template after values asignment
function templateuse() {
  mobileModal.innerHTML = `
<h3 class="works_titles">${title}</h3>
<div id="popupImageContainer"><img src="${image}"></div>
<p id="popupText">${description}</p>
<ul id="popupTools" class="work_tools_tags">`
+ skills.map((e) => (`<li class="tool_tag">${e}</li>`)).join('')
+`</ul>
<div class="button_container">
  <a href="${live}" target="_blank"><button type="button" class="project_btn live-btn">See Live <i class="fas fa-broadcast-tower"></i></button></a>
  <a target="_blank" href="${source}"><button type="button" class="project_btn source-btn">See Source <i class="fab fa-github"></i></button></a>
</div>
`;
}

// main buttons function
function popup(index) {
  asignValues(index);
  templateuse();
  document.body.append(popupContainer);
  exitIcon.addEventListener('click', () => {
    document.body.removeChild(popupContainer);
  });
}

// loop for giving buttons index to the function popup
workButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popup(index);
  });
});
// Form validation
// Get objects
const form = document.getElementById('form');
const error = document.querySelector('small');
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');

// Put classes
error.classList.add('errorMessage');

form.addEventListener('submit', (event) => {
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    message.push('The E-mail has to be in lowercase');
  }
  if (message.length > 0) {
    error.innerText = message.join(', ');
  }
});
let formData = { name: '', email: '', message: '' };

form.addEventListener('input', () => {
  localStorage.formData = JSON.stringify(formData);
  formData.name = name.value;
  formData.email = email.value;
  formData.message = message.value;
});

if (localStorage.formData) {
  formData = JSON.parse(localStorage.formData);
  name.value = formData.name;
  email.value = formData.email;
  message.value = formData.message;
}

// Add picture to works

const workImg = document.querySelectorAll('.work_img');
workImg.forEach((e, i) =>{
e.innerHTML = `<img src="${cards[i].imageMain}"></img>`;
});

// Display all projects
const seeAll = document.getElementById('see_all');
seeAll.addEventListener('click', ()=> {
  worksDisplay();
});

function worksDisplay(){
  const works = document.querySelector('.works');
  const bgg = document.querySelectorAll('.middle_circles')[1];
  const bg = document.querySelectorAll('.middle_circles')[0];
  works.classList.toggle('hidden');
  bgg.classList.toggle('hidden');
  bg.classList.toggle('hidden');
  const insidy = document.querySelector('#see_all');
  if (!displaying) insidy.innerHTML =`See less <img alt="my work" src="img/arrow_d.svg" />`;
  else insidy.innerHTML =`See more projects <img alt="my work" src="img/arrow_d.svg" />`;
  displaying = !displaying;
}
