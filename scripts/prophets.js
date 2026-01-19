const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
};

getProphetData();

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        //define heading
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        //define image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', 'auto');

        card.appendChild(fullName);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}