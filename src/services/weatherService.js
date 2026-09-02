export async function getCoordinates(cityName) {
  const response = await fetch(
  `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`
);


  if (!response.ok) {
  throw new Error("City search failed");
}

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  return {
    latitude,
    longitude
  };
}


export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,surface_pressure,visibility&hourly=temperature_2m&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
  );
   


  if (!response.ok) {
  throw new Error("Weather data could not be fetched");
}


  const data = await response.json();
  console.log(data.hourly);

 return {
  temperature: data.current.temperature_2m,
  feelsLike: data.current.apparent_temperature,
  humidity: data.current.relative_humidity_2m,
  windSpeed: data.current.wind_speed_10m,
  weatherCode: data.current.weather_code,
  pressure: data.current.surface_pressure,
  visibility: data.current.visibility,
  sunrise: data.daily.sunrise[0],
   sunset: data.daily.sunset[0],
  forecast: data.daily,
  hourly: data.hourly
};
}