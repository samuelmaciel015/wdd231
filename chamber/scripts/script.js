//get current year
const year = document.querySelector("#currentYear");
const today = new Date;
year.innerHTML = today.getFullYear();

//last modified
const modified = document.getElementById("lastModified");
modified.innerHTML = `Last Modified: ${document.lastModified}`;

//create business cards