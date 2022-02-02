const hamburguer = document.getElementById('hamburguer');

// Created all elements of the menu
const menuContainer = document.createElement('nav');
const item2Container = document.createElement('div');
const item1Container = document.createElement('div');
const item3Container = document.createElement('div');
const item1 = document.createElement('a');
const item2 = document.createElement('a');
const item3 = document.createElement('a');
const navBackground2 = document.createElement('div');
const navBackground1 = document.createElement('div');
menuContainer.appendChild(item2Container);
menuContainer.appendChild(item1Container);
menuContainer.appendChild(item3Container);

// Give classes and values
navBackground1.classList.add('nav_elipse1');
navBackground2.classList.add('nav_elipse2');
menuContainer.appendChild(navBackground1);
menuContainer.appendChild(navBackground2);
menuContainer.id = 'menuContainer';
menuContainer.classList.add('display_none');

item2Container.classList.add('item_container');
item2.classList.add('nav_text');
item2.innerText = 'About';
item2.href = '#headline';
item2Container.appendChild(item2);

item1Container.classList.add('item_container');
item1.classList.add('nav_text');
item1.innerText = 'Portfolio';
item1.href = '#works';
item1Container.appendChild(item1);

item3Container.classList.add('item_container');
item3.classList.add('nav_text');
item3.innerText = 'Contact';
item3.href = '#contact';
item3Container.appendChild(item3);  
//
document.body.append(menuContainer);

// bar icon click event

function toggleNavManu() {
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
}

hamburguer.addEventListener('click', toggleNavManu);
item1Container.addEventListener('click', toggleNavManu);
item2Container.addEventListener('click', toggleNavManu);
item3Container.addEventListener('click', toggleNavManu);
