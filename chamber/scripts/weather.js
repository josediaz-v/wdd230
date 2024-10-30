const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-descr');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.80521123157953&lon=-74.01275703924743&units=imperial&appid=ae75c217e600f9dbf5465ccd3f985528';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);
        }
        else {
            throw Error(await response.text);
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg; F - `;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let descr = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descr);
    weatherDesc.innerHTML = `${descr.charAt(0).toUpperCase()+ descr.slice(1)}`;
}