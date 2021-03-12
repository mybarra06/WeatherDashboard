var api_key = "70ff94a43482703a2caf079630272b59";
// search for a city

var currentTempEl = document.querySelector("#city");

var currentDateEl = document.querySelector("date");

var currentTempEl = document.querySelector("#current-temp");

var currentHumidityEl = document.querySelector("#current-humidity");

var currentWindEl = document.querySelector("#current-wind-speed");

var currentUvEl = document.querySelector("#current-uv-index");


// current and future conditions for that city
function getWeather(city) {
  var currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(currentWeatherUrl)
    .then((data) => data.json())
    .then(function (weather) {
      console.log(weather);
      var tempArea = weather.main.temp
      var tempF = Math.floor(1.8 * (tempArea - 273.15) + 32) + "degrees"
      
      currentTempEl.innerHTML = "Temperature: " + tempF ;
      if (weather.cod === "404") {
        alert("city not found");
        return;
      }

      // get lat & long for city
      var lon = weather.coord.lon;
      var lat = weather.coord.lat;
      var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&exclude=minutely,hourly`;
      fetch(onecallURL)
        .then((data) => data.json())
        .then(function (oneCallData) {
          
         
          
          console.log(oneCallData);
        });
    });
}
getWeather ("Phoenix");

