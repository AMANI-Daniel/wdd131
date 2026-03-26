const year = document.querySelector('#currentyear');
const lastModification = document.querySelector('#lastmodified');

const today = new Date();
year.innerHTML = today.getFullYear();
lastModification.innerHTML = document.lastModified;

const temperature = document.querySelector('#temp');
temperatureValue = 8;
temperature.textContent = `${temperatureValue} °C`;

const condition = document.querySelector('#condition');
condition.textContent = "Cloud-sun";

const wind = document.querySelector('#wind');
windValue = 6; 
wind.textContent = `${windValue} km/h`;

let windChill = document.querySelector('#windChill');


windChill.innerHTML = `${calculateWindChill(temperatureValue, windValue)}°C`;

function calculateWindChill(temperatureValue, windValue) {
    return windChill = Math.round((13.12 + (0.6215 * temperatureValue) - 11.37 * Math.pow(windValue, 0.16) + (0.3965 * temperatureValue) * Math.pow(windValue, 0.16))*100)/100;
}
