const weatherAPI = ({ location  }) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=53a730f3a4b74aefa2144040241703&q=${location}`;
  
  const getWeather = async () => {
    try {
      const resources = await fetch(url, { mode: 'cors' });
      const resolve = await resources.json();
      if (!resources.ok) {
        alert(resolve['error'].message);
      }
      return resolve;
    } catch(err) {
      console.log(err);
    }
  }
  
  return { getWeather };
};

const weatherInfo = ({
    location, 
    weatherApi, 
  }, {
    locationNameStr,
    locationDateStr,
    tempCStr,
    conditionStr, 
    conditionImg,
    uvStr, 
    feelsLikeStr, 
    humidityStr, 
    windDirStr, 
    windKphStr, 
    pressureMbStr, 
    visKmStr
  }) => {
  const locationName = document.querySelector(locationNameStr);
  const locationDate = document.querySelector(locationDateStr);
  const tempC = document.querySelector(tempCStr);
  const conditionText = document.querySelector(conditionStr);
  const conditionImage = document.querySelector(conditionImg);

  const uvText = document.querySelector(uvStr);
  const feelsLikeText = document.querySelector(feelsLikeStr);
  const humidityText = document.querySelector(humidityStr);
  const windDirText = document.querySelector(windDirStr);
  const windKphText = document.querySelector(windKphStr);
  const pressureMbText = document.querySelector(pressureMbStr);
  const visKmText = document.querySelector(visKmStr);
 
  const getInfo = () => {
    const weatherInfoGetter = weatherApi({ location }).getWeather()
      .then((resolve) => {
          const current = resolve['current'];
          const locationInfo = resolve['location'];

          locationName.innerText = `${locationInfo.name}, ${locationInfo.country}`;
          tempC.innerText = `${current.temp_c} °C`;
          conditionText.innerText = `${current.condition.text}`; 
          conditionImage.setAttribute('src', `https:${current.condition.icon}`);
          locationDate.innerText = `Last Updated: ${current.last_updated}`;

          uvText.innerText = `${current.uv}`; 
          feelsLikeText.innerText = `${current.feelslike_c} °C`;
          humidityText.innerText = `${current.humidity}%`;
          windDirText.innerText = `${current.wind_dir}`;
          windKphText.innerText = `${current.wind_kph}`;
          pressureMbText.innerText = `${current.pressure_mb}`;
          visKmText.innerText = `${current.vis_km}`;

       })
      .catch((err) => err); 

    return weatherInfoGetter;
  };

  return { getInfo };
};

 export { weatherAPI, weatherInfo };
   
