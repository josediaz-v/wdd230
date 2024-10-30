const futureTemp = document.querySelector('#future-temp');
const futureUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.80521123157953&lon=-74.01275703924743&units=imperial&appid=ae75c217e600f9dbf5465ccd3f985528';

async function apiFetch() {
    try {
        const response = await fetch(futureUrl);
        if(response.ok) {
            const data = await response.json();
            console.log(data);

            displayFutureResults(data);
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

function displayFutureResults(data) {
    futureTemp.innerHTML = '';

    const dailyForecasts = {};

    data.list.forEach(element => {
        const date = new Date(element.dt * 1000).toISOString().split('T')[0];

        if (!dailyForecasts[date] && Object.keys(dailyForecasts).length < 3) {
            dailyForecasts[date] = element;
        }
    });

    Object.values(dailyForecasts).forEach(element => {
        const futureWeatherIcon = document.createElement('img');
        const iconsrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
        futureWeatherIcon.setAttribute('src', iconsrc);
        futureWeatherIcon.setAttribute('class', 'future-weather-icon');

        const futureTempText = `${element.main.temp} &deg; F - `;
        const tempLi = document.createElement('li');
        futureTemp.appendChild(tempLi);
        tempLi.appendChild(futureWeatherIcon);
        tempLi.innerHTML += futureTempText;
    });
}

