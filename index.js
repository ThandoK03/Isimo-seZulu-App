function updateWeatherInfo(response){
  let temperatureElement= document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date (response.time * 1000);

  cityElement.innerHTML=response.data.city;
  windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
  humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML=response.data.condition.description; 
  timeElement.innerHTML= formatDate(date);
  temperatureElement.innerHTML = `${Math.round(temperature)}`;
 
}

function formatDate(date){
  
  let minutes  = date.getMinutes();
  let hours = date.getHours();
  let days= [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes >10){
    minutes =`0${minutes};`
  }

  return `${day}  ${hours}: ${minutes}`;

}


function searchCity(city){
let apiKey ="853f9fa9a83fbe77003t40d42014oc36";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(updateWeatherInfo);
}


function handleSearchSubmit(event) {

  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
  
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");