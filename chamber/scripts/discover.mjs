import { discoverData } from '../data/discoverData.mjs';

function createCards(locations) {
    console.log(locations);
    const div = document.querySelector("#discover");

    locations.forEach((location) => {
        const card = document.createElement("div");
        card.classList.add("card-grid");

        const h2 = document.createElement('h2');
        h2.textContent = location.title;

        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.setAttribute("src", `images/${location.image}`);
        image.setAttribute("alt", location.title);
        image.setAttribute("loading", 'lazy');

        const address = document.createElement('address');
        address.innerHTML = location.address;

        const description = document.createElement('p');
        description.textContent = location.description;

        const button = document.createElement('button');
        button.textContent = "Learn More";

        figure.appendChild(image);
        card.appendChild(h2);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        div.appendChild(card);
    });
}

function displayMessage() {
    const message = document.getElementById('message');
    
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();

    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit == 1) {
        message.textContent = `You last visited ${daysSinceLastVisit} day ago`;
    }
    else if (daysSinceLastVisit > 1) {
        message.textContent = `You last visited ${daysSinceLastVisit} days ago`;
    }
    else if (daysSinceLastVisit == 0 && lastVisit) {
        message.textContent = "Back so soon! Awesome!";
    }
    else {
        message.textContent = "Welcome! Let us know if you have any questions.";
    }
    
    localStorage.setItem('lastVisit', now);
}

createCards(discoverData);

displayMessage();