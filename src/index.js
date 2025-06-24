function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#weather-app-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector ("#icon");


    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`; 
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML =`<img src= ${response.data.condition.icon_url} class="weather-app-temperature-icon" >`
}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;  
    }

    if (hours < 10) {  
        hours = `0${hours}`; // it doesnt upload the hour idk why
    }

    return `${day} ${hours}:${minutes}`; 
}
function searchCity(city){
 let apiKey = "7eo8fca0945e36ba8ac000cdt621a213";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(refreshWeather);
 
}
function handleSearchSumit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML =searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumit);

searchCity("Paris");
