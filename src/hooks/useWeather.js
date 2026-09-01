import { useState } from "react";

import {
  getCoordinates,
  getWeather
} from "../services/weatherService";

import weatherConditions from "../utils/weatherConditions";



function useWeather() {

  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");
  const [windSpeed, setWindSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feelsLike, setFeelsLike] = useState(null);





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
    

    const weatherCode = weatherData.weatherCode;

    const currentCondition =
      weatherConditions[weatherCode] || "Unknown Weather";

    setCondition(currentCondition);

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
  fetchWeather
};

}

export default useWeather;