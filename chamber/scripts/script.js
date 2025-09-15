//get current year
const year = document.querySelector("#currentYear");
const today = new Date;
year.innerHTML = today.getFullYear();

//last modified
const modified = document.getElementById("lastModified");
modified.innerHTML = `Last Modified: ${document.lastModified}`;

//get data from json file
async function getData() {
    const response = await fetch('https://samuelmaciel015.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displayCards(data.businesses);
}

getData();

//create business cards
const displayCards = (businesses) => {
    businesses.forEach((business) => {
        const section = document.querySelector(".business-card");

        //card grid
        const card = document.createElement("div");
        card.classList.add("card-grid");

        //h2
        const h2 = document.createElement('h2');
        h2.textContent = business.names;
        //image
        const image = document.createElement('img');
        image.setAttribute("src", business.imageName);
        image.setAttribute("alt", business.names);
        image.setAttribute("loading", 'lazy');

        //div with info
        const info = document.createElement('div');

        //p with phone
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${business.phoneNumbers}`;

        //p with address
        const addresses = document.createElement('p');
        addresses.textContent = `Address: ${business.addresses}`;

        //p with url
        const link = document.createElement('p');
        link.textContent = `URL: ${business.websiteURLs}`;

        //appending
        //info.appendChild(phone);
        //info.appendChild(addresses);
        //info.appendChild(link);

        card.appendChild(h2);
        //card.appendChild(image);
        //card.appendChild(info);

        section.appendChild(card);
    });
}