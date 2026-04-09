const year = document.querySelector('#currentyear');
const lastModification = document.querySelector('#lastmodified');


const today = new Date();
year.innerHTML = today.getFullYear();

lastModification.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})
