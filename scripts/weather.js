//html elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//api url
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74819&lon=6.64251&units=metric"&appid=281043fec68c82df1794bc80e020fa1e';

async function apiFetch() {
    try {
        const response = await fetch(url); 
        
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main['temp']}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}