function refreshWeather (response){
    let temperatureElement = document.querySelector ("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = response.data.city;
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