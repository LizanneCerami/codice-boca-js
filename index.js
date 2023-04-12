const menuSection = document.getElementById('menu');

function displayMenuItems(menuItems){
  menuSection.innerHTML = '';
  menuItems.map(dish => {
    const div = document.createElement('div');
    const title = document.createElement('h2'); // create h2
    const titleText = document.createTextNode(dish.title); // create title text that goes inside the h2
    title.appendChild(titleText); // stick title text inside h2
    div.appendChild(title); // stick h2 into the div
    const description = document.createElement('p'); // create p
    const descriptionText = document.createTextNode(dish.description);// create the text for inside the p
    description.appendChild(descriptionText); // outs text inside p
    div.appendChild(description);
    menuSection.appendChild(div);
  })
}

async function getMenuItems() {
  const response = await fetch('https://codice-boca.web.app/menu');
  const menuItems = await response.json();
  displayMenuItems(menuItems);
}

getMenuItems();