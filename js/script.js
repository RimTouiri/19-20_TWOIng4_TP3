
// Fonction appelée lors du click du bouton
function start() {

  var cityName = document.getElementById("city-input").value;

  if (cityName == "")
    cityName = "Paris";
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityName);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      //alert(data.val());
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDayForecastOne(){
  var cityName = document.getElementById("city-input").value;

  if (cityName == "")
    cityName = "Paris";
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityName);
  apiWeather.fetchTomorrow().then(function(response){
    console.log(response)
    const data = response.data;
      //alert(data.val());
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-one').innerHTML = main;
      document.getElementById('today-forecast-more-info-one').innerHTML = description;
      document.getElementById('icon-weather-container-one').innerHTML = icon;
      document.getElementById('today-forecast-temp-one').innerHTML = `${temp}°C`;
  });
  }

  function getThreeDayForecastTwo(){
    var cityName = document.getElementById("city-input").value;

  if (cityName == "")
    cityName = "Paris";
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityName);
  apiWeather.fetchAfterTomorrow().then(function(response){
    console.log(response)
    const data = response.data;
      //alert(data.val());
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-two').innerHTML = main;
      document.getElementById('today-forecast-more-info-two').innerHTML = description;
      document.getElementById('icon-weather-container-two').innerHTML = icon;
      document.getElementById('today-forecast-temp-two').innerHTML = `${temp}°C`;
  });
  }

  function getThreeDayForecastThree(){
    var cityName = document.getElementById("city-input").value;

  if (cityName == "")
    cityName = "Paris";
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityName);
  apiWeather.fetchAfterAfterTomorrow().then(function(response){
    console.log(response)
    const data = response.data;
      //alert(data.val());
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-three').innerHTML = main;
      document.getElementById('today-forecast-more-info-three').innerHTML = description;
      document.getElementById('icon-weather-container-three').innerHTML = icon;
      document.getElementById('today-forecast-temp-three').innerHTML = `${temp}°C`;
  });

}
