const currentYear = document.querySelector('#currentyear');
const lastModification = document.querySelector('#lastmodified');

const today = new Date();

currentYear.innerHTML = today.getFullYear();

lastModification.innerHTML = document.lastModified;