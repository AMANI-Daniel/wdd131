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


const completedCourses = [
    {
        id: "primary",
        name: "Primary School"
    },
    {
        id: "ordinary",
        name: "Ordinary Level"
    },
    {
        id: "high",
        name: "High-School College"
    },
    {
        id: "university",
        name: "Some University College"
    },
    {
        id: "bachelor",
        name: "Bachelor's Degree"
    },
    {
        id: "master",
        name: "Master's Degree"
    }
];

createSelectOptions();

function createSelectOptions() {
    completedCourses.forEach(completedCourse => {
        let option = document.createElement('option');
        option.setAttribute('value', completedCourse.id);
        option.textContent = completedCourse.name;
        document.querySelector('#course').appendChild(option);
    });
}
const local = document.querySelector('local');

createLocalStarage();

function createLocalStarage() {
    let numVisits = Number(window.localStorage.getItem('visits')) || 0;
    numVisits++;
    localStorage.setItem('visits', numVisits);
}


