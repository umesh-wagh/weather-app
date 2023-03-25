
const apiKey = "757236fbec0aabc5b90e376689da98f7";
const form = document.querySelector("form");
const cityInput = document.querySelector("#city");

function getWeather(event) {
  event.preventDefault();
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {

      document.querySelector('#country').textContent = data.sys.country;           
      document.querySelector('#base').textContent = data.base;
      document.querySelector('#min-temp').textContent = data.main.temp_min;
      document.querySelector('#max-temp').textContent = data.main.temp_max;
      document.querySelector('#latitude').textContent = data.coord.lat;
      document.querySelector('#longitude').textContent = data.coord.lon;
      document.querySelector('#description').textContent = data.weather[0].description;
      document.querySelector('#humidity').textContent = data.main.humidity;
      document.querySelector('#sea_level').textContent = data.main.sea_level;
      document.querySelector('#ground_level').textContent = data.main.grnd_level;
      document.querySelector('#visibility').textContent = data.visibility;
      document.querySelector('#wind_speed').textContent = data.wind.speed;
      document.querySelector('#temp').textContent = data.rain;      
    })
    .catch(error => {
      console.error(error);
    });
}

form.addEventListener("submit", getWeather);