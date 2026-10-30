//current year
const year = document.querySelector('#currentyear');
const current = new Date();

year.innerHTML = current.getFullYear();

//last modified
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;