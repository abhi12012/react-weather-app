import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

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

  const { searchedCity } = useContext(WeatherContext);
  
   

  return (
    <div>
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