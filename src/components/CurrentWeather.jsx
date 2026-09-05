
function CurrentWeather({
  temperature,
  feelsLike,
  humidity,
  pressure,
  visibility,
  sunrise,
  sunset,
  icon,
  condition,
  windSpeed
}) {

 
 
   

  return (
    

      <div>

      

    <button onClick={() => setSearchedCity("Mumbai")}>
      Change City
    </button>


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

export default CurrentWeather;