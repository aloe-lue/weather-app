import './css/style.css';
import searchIcon from './js/searchIcon';
import { weatherInfo, weatherAPI, } from './js/weatherInfo';

window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector(
    'input[id="search-weather-location"]',
  );

  const searchLocationInput = document.querySelector('input[id="search-weather-location"]');
  const searchBtn = document.querySelector('button[id="search-location"]');
  searchIcon(searchBtn);

  weatherInfo({ location: 'london', weatherApi: weatherAPI }, {
    locationNameStr: "div[class='location-name-and-country']",
    locationDateStr: "div[class='location-date']",
    tempCStr: "div[class='temp-c']",
    conditionStr: "div[class='condition-text']",
    conditionImg: "img[class='condition-img']",
    uvStr: "div[class='uv']",
    feelsLikeStr: "div[class='feelslike-c']",
    humidityStr: "div[class='humidity']",
    windDirStr: "div[class='wind-dir']",
    windKphStr: "div[class='wind-kph']",
    pressureMbStr: "div[class='pressure-mb']",
    visKmStr: "div[class='vis-km']"
 }).getInfo();

  searchBtn.addEventListener('click', (e) => {
    if (searchLocationInput.value.length === 0) {
      searchLocationInput.reportValidity();
    } else {
      e.preventDefault();
      weatherInfo({ location: searchLocationInput.value , weatherApi: weatherAPI }, {
        locationNameStr: "div[class='location-name-and-country']",
        locationDateStr: "div[class='location-date']",
        tempCStr: "div[class='temp-c']",
        conditionStr: "div[class='condition-text']",
        conditionImg: "img[class='condition-img']",
        uvStr: "div[class='uv']",
        feelsLikeStr: "div[class='feelslike-c']",
        humidityStr: "div[class='humidity']",
        windDirStr: "div[class='wind-dir']",                                        
        windKphStr: "div[class='wind-kph']",
        pressureMbStr: "div[class='pressure-mb']",
        visKmStr: "div[class='vis-km']"
     }).getInfo();

    }
  });
 
});
