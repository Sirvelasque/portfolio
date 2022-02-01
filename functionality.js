const hamburguer = document.getElementById("hamburguer");

//Created all elements of the menu
let menuContainer = document.createElement("nav");
let exit = document.createElement("div");
let item1_container = document.createElement("div");
let item2_container = document.createElement("div");
let item3_container = document.createElement("div");
let item1 = document.createElement("a");
let item2 = document.createElement("a");
let item3 = document.createElement("a");
let li = document.createElement("i");
let nav_background2 = document.createElement("div")
let nav_background1 = document.createElement("div")
menuContainer.appendChild(item1_container);
menuContainer.appendChild(item2_container);
menuContainer.appendChild(item3_container);

//Give classes and values
nav_background1.classList.add('nav_elipse1');
nav_background2.classList.add('nav_elipse2');
menuContainer.appendChild(nav_background1);
menuContainer.appendChild(nav_background2);
menuContainer.id = "menuContainer";
menuContainer.classList.add('display_none');
li.classList.add('fas', 'fa-chevron-right')

item1_container.classList.add('item_container')
item1.classList.add('nav_text');
item1.innerText='Portfolio';
item1.href="#works";
item1_container.appendChild(item1);
item1_container.appendChild(li);

item2_container.classList.add('item_container')
item2.classList.add('nav_text');
item2.innerText='About';
item2.href="#headline";
item2_container.appendChild(item2);
item1_container.appendChild(li);

item3_container.classList.add('item_container')
item3.classList.add('nav_text');
item3.innerText='Contact';
item3.href="#contact";
item3_container.appendChild(item3);
item1_container.appendChild(li);
//
document.body.append(menuContainer);

//bar icon click event

hamburguer.addEventListener('click', function(){
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
})
item1_container.addEventListener('click', function(){
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
})
item2_container.addEventListener('click', function(){
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
})
item3_container.addEventListener('click', function(){
  menuContainer.classList.toggle('display');
  menuContainer.classList.toggle('display_none');
})
