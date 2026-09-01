function WeatherHeading({ city, temperature, humidity, feelsLike, icon, condition, windSpeed }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <p>{icon}</p>
      <h2>{temperature}°C</h2>
      <p>Feels like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>{condition}</p>
      <p>Wind: {windSpeed} km/h</p>
    </div>
  );
}

export default WeatherHeading;