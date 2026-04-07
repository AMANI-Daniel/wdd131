const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');
const select = document.querySelector('#product');

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;



const products = [
    {
        id: "fc-1888",
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {  
    let option = document.createElement('option');
    option.setAttribute('Value', product.id);
    option.textContent = product.name;
    select.appendChild(option);
});


localStorage.setItem("reviewed","");
let visitedNum = Number(window.localStorage.getItem("reviewed")) || 0;

if (visitedNum >= 0) {
    visitedNum++;
}
localStorage.setItem("reviewed", visitedNum);



