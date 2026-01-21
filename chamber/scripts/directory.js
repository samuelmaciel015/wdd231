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
        const div = document.querySelector(".display");

        //card grid
        const card = document.createElement("div");
        card.classList.add("card-grid");

        //h2
        const h2 = document.createElement('h2');
        h2.textContent = business.names;
        
        //h6
        const h3 = document.createElement('h3');
        if (business.membership == 1) {
            h3.textContent = "Member";
        } else if (business.membership == 2) {
            h3.textContent = "Silver";
        } else {
            h3.textContent = "Golden";
        }
        

        //image
        const image = document.createElement('img');
        image.setAttribute("src", `images/${business.imageName}`);
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
        info.appendChild(phone);
        info.appendChild(addresses);
        info.appendChild(link);

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(image);
        card.appendChild(info);

        div.appendChild(card);
    });
}

//display as grid or list
const gridbtn = document.getElementById("grid");
const listbtn = document.getElementById("list");
const display = document.querySelector('.display');

gridbtn.addEventListener("click", () => {
	display.classList.add("display");
	display.classList.remove("display-list");
});

listbtn.addEventListener("click", () => {
	display.classList.add("display-list");
	display.classList.remove("display");
});

//hamburguer menu
const hamburguer = document.querySelector(".hamburguer");
const nav = document.getElementById("nav");

hamburguer.addEventListener('click', () => {
    nav.classList.toggle("show");
    hamburguer.classList.toggle("show");
})


