const hamburguer = document.getElementById('hamburguer');

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
    title: 'Global Summit Page',
    description:
      "<span class='description-3'>This website is a good example of a summit page made following a pre-structured design. Here you can see the main page and navigate to the about page and back to Home with the top-loft Logo. <br> The featured speakers' section is coded dynamically to be able to add new speakers without problems.<br>You can access the about page by the about button in the navigation bar, there you will find information about the organization and previews summits</span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/projects/GlobalSubmitP.png',
    live: 'https://sirvelasque.github.io/capstonePage/',
    source: 'https://github.com/Sirvelasque/capstonePage',
    imageMain: 'img/projects/GlobalSubmit.png'
  },
  {
    title: 'Portfolio',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/SnapshootPortfolio.svg',
    live: 'https://sirvelasque.github.io/portfolio/',
    source: 'https://github.com/Sirvelasque/portfolio',
  },
  {
    title: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/SnapshootPortfolio.svg',
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'img/SnapshootPortfolio.svg',
    live: '#',
    source: '#',
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
<ul id="popupTools" class="work_tools_tags">
  <li class="tool_tag">${skills[0]}</li>
  <li class="tool_tag">${skills[1]}</li>
  <li class="tool_tag">${skills[2]}</li>
</ul>
<div class="button_container">
  <a href="${live}"><button type="button" class="project_btn live-btn">See Live <i class="fas fa-broadcast-tower"></i></button></a>
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
