async function GetData() {
    const response = await fetch('https://samuelmaciel015.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    DisplayCards(data.businesses);
}

//create business cards
const DisplayCards = (businesses) => {
    businesses.forEach((business) => {

        if (business.membership == 1 || business.names == "Lumenix Solar Corp" || business.names == "IronPeak Logistics") {
            } else {
            const div = document.querySelector(".display");

            //card grid
            const card = document.createElement("div");
            card.classList.add("card-grid");

            //h2
            const h2 = document.createElement('h2');
            h2.textContent = business.names;
            
            //h6
            const h3 = document.createElement('h3');
            if (business.membership == 2) {
                h3.textContent = "Silver";
            } else {
                h3.textContent = "Golden";
            }
            //image
            const image = document.createElement('img');
            image.setAttribute("src", `images/${business.imageName}`);
            image.setAttribute("alt", business.names);
            image.setAttribute("loading", 'lazy');

            //div with info
            const info = document.createElement('div');

            //p with phone
            const phone = document.createElement('p');
            phone.textContent = `Phone: ${business.phoneNumbers}`;

            //p with address
            const addresses = document.createElement('p');
            addresses.textContent = `Address: ${business.addresses}`;

            //p with url
            const link = document.createElement('p');
            link.textContent = `URL: ${business.websiteURLs}`;
            //appending
            info.appendChild(phone);
            info.appendChild(addresses);
            info.appendChild(link);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(image);
            card.appendChild(info);

            div.appendChild(card);
        }
    });
}

GetData();

async function GetWeather(url) {
    const response = await fetch(url);
    const data = await response.json();
    DisplayWeatherInfo(data);
};

function DisplayWeatherInfo(data) {
    const currentWeatherInfo = document.getElementById('currentWeather-info');
    const currentWeatherImage = document.getElementById('currentWeather-image');
    const weatherToday = document.querySelector('#weatherToday');
    const weatherTomorrow = document.querySelector('#weatherTomorrow');
    const weatherAfterTomorrow = document.querySelector('#weatherAfterTomorrow');
    
    const image = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentWeatherImage.setAttribute('src', image);
    currentWeatherImage.setAttribute('alt', data.weather[0].description);

    const weatherTemp = document.createElement('p');
    weatherTemp.innerHTML = `${data.main.temp}ºF`;
    currentWeatherInfo.appendChild(weatherTemp);

    const weatherDesc = document.createElement('p');
    weatherDesc.innerHTML = data.weather[0].description;
    currentWeatherInfo.appendChild(weatherDesc);

    const weatherHigh = document.createElement('p');
    weatherHigh.innerHTML = `High: ${data.main.temp_max}º`;
    currentWeatherInfo.appendChild(weatherHigh);

    const weatherLow = document.createElement('p');
    weatherLow.innerHTML = `Low: ${data.main.temp_min}º`;
    currentWeatherInfo.appendChild(weatherLow);

    const weatherHumidity = document.createElement('p');
    weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    currentWeatherInfo.appendChild(weatherHumidity);

    weatherToday.innerHTML = `Today: ${data.main.temp}ºF`;
    weatherTomorrow.innerHTML = `Wednsday: ${data.main.temp_max}ºF`;
    weatherAfterTomorrow.innerHTML = `Thursday: ${data.main.temp_min}ºF`;
};

const api = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.46047&lon=-46.52551&units=metric"&appid=281043fec68c82df1794bc80e020fa1e';

GetWeather(api);