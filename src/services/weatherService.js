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
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,surface_pressure,visibility`
  );
   


  if (!response.ok) {
  throw new Error("Weather data could not be fetched");
}


  const data = await response.json();

 return {
  temperature: data.current.temperature_2m,
  feelsLike: data.current.apparent_temperature,
  humidity: data.current.relative_humidity_2m,
  windSpeed: data.current.wind_speed_10m,
  weatherCode: data.current.weather_code,
  pressure: data.current.surface_pressure,
  visibility: data.current.visibility,
};
}