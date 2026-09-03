function WeatherHeading({ city, children }) {
  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>

      {children}
    </div>
  );
}

export default WeatherHeading;