function WeatherHeading({ city, temperature,sunrise,
sunset, humidity,pressure,visibility, feelsLike, icon, condition, windSpeed }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <p>{icon}</p>
      <h2>{temperature}°C</h2>
      <p>Feels like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Pressure: {pressure} hPa</p>
      <p>Visibility: {visibility} m</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <p>{condition}</p>
      <p>Wind: {windSpeed} km/h</p>
    </div>
  );
}

export default WeatherHeading;