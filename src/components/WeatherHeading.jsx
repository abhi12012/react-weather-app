function WeatherHeading({ city, temperature, condition }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <h2>{temperature}°C</h2>
      <p>{condition}</p>
    </div>
  );
}

export default WeatherHeading;