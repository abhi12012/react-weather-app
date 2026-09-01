function WeatherHeading({ city, temperature, feelsLike, icon, condition, windSpeed }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <h2>{temperature}°C</h2>
      <p>Feels like: {feelsLike}°C</p>
      <p>{condition}</p>
      <p>Wind: {windSpeed} km/h</p>
    </div>
  );
}

export default WeatherHeading;