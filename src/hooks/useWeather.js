import { useState } from "react";

import {
  getCoordinates,
  getWeather
} from "../services/weatherService";

import weatherConditions from "../utils/weatherConditions";
import weatherIcons from "../utils/weatherIcons";


function useWeather() {

  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");
  const [windSpeed, setWindSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feelsLike, setFeelsLike] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  
  





 async function fetchWeather(cleanCity) {



  setLoading(true);

  setError("");

  try {

    const coordinates = await getCoordinates(cleanCity);

    const weatherData = await getWeather(
      coordinates.latitude,
      coordinates.longitude
    );

    

    const currentTemperature = weatherData.temperature;

    setTemperature(currentTemperature);

    const currentFeelsLike = weatherData.feelsLike;

setFeelsLike(currentFeelsLike);

const currentHumidity = weatherData.humidity;

setHumidity(currentHumidity);



const currentPressure = weatherData.pressure;

setPressure(currentPressure);

const currentVisibility = weatherData.visibility;

setVisibility(currentVisibility);


    const currentSunrise = weatherData.sunrise;

setSunrise(currentSunrise);

const currentSunset = weatherData.sunset;

setSunset(currentSunset);

    const weatherCode = weatherData.weatherCode;

    const currentCondition =
      weatherConditions[weatherCode] || "Unknown Weather";

    setCondition(currentCondition);


    const currentIcon =
  weatherIcons[weatherCode] || "🌦️";

  setIcon(currentIcon);


    const currentWindSpeed = weatherData.windSpeed;

    setWindSpeed(currentWindSpeed);

  } catch (error) {

  setError(error.message || "Something went wrong");

} finally {

  setLoading(false);

}

}
return {
  temperature,
  condition,
  windSpeed,
  loading,
  error,
  fetchWeather,
  feelsLike,
  humidity,
  pressure,
  visibility,
  sunrise,
sunset,
};

}

export default useWeather;