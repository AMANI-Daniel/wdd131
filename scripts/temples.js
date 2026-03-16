const year = document.querySelector('#currentyear');
const lastModified = document.getElementById('lastModified');
const today = new Date();
year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});