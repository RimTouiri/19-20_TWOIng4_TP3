// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    this.city = city;
    //this.countryCode =  ISO 3166;
    this.cnt = 1;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  fetchTomorrow(){
    this.cnt = 2;
    return axios
    .get(`${API_URL}?q=${this.city}&cnt={cnt}&appid=${API_KEY}`, {
      crossdomain: true
    })
    }

    fetchAfterTomorrow(){
    this.cnt = 3;
    return axios
    .get(`${API_URL}?q=${this.city}&cnt={cnt}&appid=${API_KEY}`, {
      crossdomain: true
    })
    }

    fetchAfterAfterTomorrow(){
    console.log(this.city);
    console.log(this.cnt);
    return axios
    .get(`${API_URL}?q=${this.city}&cnt={cnt}&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
}