//
// API SCRIPT
//

// API URL and vars
const lat = "43.82";
const lon = "-111.79";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

// GET / DEAL WITH API
export async function getWeather() {
  let response = "";

  try {
    response = await fetch(url);
    console.log("res ", response)
    if (response.ok) {
      const data = await response.json();
      console.log("API data: ", data);

    } else {
      throw Error("API res error", await response.text());
    }

  } catch (error) {
    console.log("API try error: ", error);
  }
}

//function displayResults(weatherData) {
//  // toFixed(0) rounds the temperature to the nearest whole number
//  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
//  console.log(currentTemp.innerHTML)
//
//  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
//  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
//  const desc = weatherData.weather[0].description;
//
//  weatherIcon.setAttribute('src', iconsrc);
//  weatherIcon.setAttribute('alt', desc);
//  captionDesc.textContent = desc;
//
//  const temp = weatherData.main.temp.toFixed(0);
//  const windspeed = weatherData.wind.speed.toFixed(0);
//
//  // Include the JS file before this file call to get this func
//  windchill(temp, windspeed);
//}


