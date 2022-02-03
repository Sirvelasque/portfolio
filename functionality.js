const hamburguer = document.getElementById("hamburguer");

// Created all elements of the menu
const menuContainer = document.createElement("nav");
const item1Container = document.createElement("div");
const item2Container = document.createElement("div");
const item3Container = document.createElement("div");
const item1 = document.createElement("a");
const item2 = document.createElement("a");
const item3 = document.createElement("a");
const navArrow1 = document.createElement("div");
const navArrow2 = document.createElement("div");
const navArrow3 = document.createElement("div");
const navBackground2 = document.createElement("div");
const navBackground1 = document.createElement("div");
menuContainer.append(item2Container);
menuContainer.appendChild(item1Container);
menuContainer.appendChild(item3Container);

// Give classes and values
menuContainer.id = "menuContainer";
menuContainer.classList.add("display_none");
navArrow1.classList.add("nav_arrow");
navArrow1.innerText = ">";
navArrow2.classList.add("nav_arrow");
navArrow2.innerText = ">";
navArrow3.classList.add("nav_arrow");
navArrow3.innerText = ">";

// background
menuContainer.appendChild(navBackground1);
menuContainer.appendChild(navBackground2);
navBackground1.classList.add("nav_elipse1");
navBackground2.classList.add("nav_elipse2");

item1Container.classList.add("item_container");
item1.classList.add("nav_text");
item1.innerText = "Portfolio";
item1.href = "#works";
item1Container.appendChild(item1);
item1Container.appendChild(navArrow1);

item2Container.classList.add("item_container");
item2.classList.add("nav_text");
item2.innerText = "About";
item2.href = "#headline";
item2Container.appendChild(item2);
item2Container.appendChild(navArrow2);

item3Container.classList.add("item_container");
item3.classList.add("nav_text");
item3.innerText = "Contact";
item3.href = "#contact";
item3Container.appendChild(item3);
item3Container.appendChild(navArrow3);
//
document.body.append(menuContainer);

// bar icon click event

function toggleNavManu() {
  menuContainer.classList.toggle("display");
  menuContainer.classList.toggle("display_none");
  hamburguer.classList.toggle("fa-times");
  hamburguer.classList.toggle("fa-bars");
}

hamburguer.addEventListener("click", toggleNavManu);
item1Container.addEventListener("click", toggleNavManu);
item2Container.addEventListener("click", toggleNavManu);
item3Container.addEventListener("click", toggleNavManu);

let cards = [
    {
      title: 'Multi-Pos Stories',
      info: ['facebook', 'backend', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
      skills: ['html', 'css', 'javascript'],
      image: 'img/SnapshootPortfolio.svg',
      live: 'see live',
      source: 'see source',
    },
    {
      title: 'Multi-Po Stories',
      info: ['facebook', 'full stack dev', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
      skills: ['html', 'css', 'javascript'],
      image: 'img/SnapshootPortfolio.svg',
      live: 'see live',
      source: 'see source',
    },
    {
      title: 'Multi-Post Stories',
      info: ['facebook', 'backend', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
      skills: ['html', 'css', 'javascript'],
      image: 'img/SnapshootPortfolio.svg',
      live: 'see live',
      source: 'see source',
    },
    {
      title: 'Multi-Post Stories',
      info: ['UBER', ' Lead Developer', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
      skills: ['html', 'css', 'javascript'],
      image: 'img/SnapshootPortfolio.svg',
      live: '#',
      source: '#',
    },
  ];


//
const firstCardButton = document.getElementById("firstCardButton");
const secondCardButton = document.getElementById("secondCardButton");
const thirdCardButton = document.getElementById("thirdCardButton");
const fourthCardButton = document.getElementById("fourthCardButton");

//  Creating pop up containers
const popupContainer1 = document.createElement("section");
const popupContainer2 = document.createElement("article");
popupContainer1.id = "popupContainer1";

const projectImage = document.createElement("img");
const technologiesList = document.createElement("ul");

let mobileModal = document.querySelector(".mobal");
mobileModal.id = "mobileModal";
const title = cards[0].title;
mobileModal.innerHTML = `
<h3 class="works_titles">${title}</h3>
<i id="popupxIcon" class="fas fa-times"></i>
<div id="popupImageContainer"></div>
<p id=popupText>A daily selection of privately personalized reads;no accounts or
sign-ups required. has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a standard
dummy text.</p>
<ul id="popupTools" class="work_tools_tags">
  <li class="tool_tag">html</li>
  <li class="tool_tag">Ruby on rails</li>
  <li class="tool_tag">css</li>
</ul>
  <button type="button" class="project_btn">See project</button>
  <button type="button" class="project_btn">See project</button>
`;

//



// firstCardButton.addEventListener('click', Function() {

// });

// secondCardButton.addEventListener('click', Function() {

// });

// thirdCardButton.addEventListener('click', Function() {

// });

// fourthCardButton.addEventListener('click', Function() {

// });

document.body.appendChild(mobileModal);
