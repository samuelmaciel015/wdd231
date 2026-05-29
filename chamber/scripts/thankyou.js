//get current year
const year = document.querySelector("#currentYear");
const today = new Date;
year.innerHTML = today.getFullYear();

//last modified
const modified = document.getElementById("lastModified");
modified.innerHTML = `Last Modified: ${document.lastModified}`;

//hamburguer menu
const hamburguer = document.querySelector(".hamburguer");
const nav = document.getElementById("nav");

hamburguer.addEventListener('click', () => {
    nav.classList.toggle("show");
    hamburguer.classList.toggle("show");
});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);


document.querySelector('#results').innerHTML = `<h2>${myInfo.get('firstName')} ${myInfo.get('lastName')}</h2>
<h3>From ${myInfo.get('orgTitle')}</h3>
<p>E-mail: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Organization Description: ${myInfo.get('orgDesc')}</p>`;