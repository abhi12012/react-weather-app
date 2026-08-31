function WeatherHeading({ city, temperature, condition, windSpeed }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <h2>{temperature}°C</h2>
      <p>{condition}</p>
      <p>Wind: {windSpeed} km/h</p>
    </div>
  );
}

export default WeatherHeading;