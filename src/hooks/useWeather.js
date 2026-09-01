import { useState } from "react";

import {
  getCoordinates,
  getWeather
} from "../services/weatherService";

function useWeather() {

  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");
  const [windSpeed, setWindSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");





 async function fetchWeather(cleanCity) {

  setLoading(true);

  try {

    const coordinates = await getCoordinates(cleanCity);

    const weatherData = await getWeather(
      coordinates.latitude,
      coordinates.longitude
    );

    const currentTemperature = weatherData.temperature;

    setTemperature(currentTemperature);

    const weatherCode = weatherData.weatherCode;

    const currentCondition =
      weatherConditions[weatherCode] || "Unknown Weather";

    setCondition(currentCondition);

    const currentWindSpeed = weatherData.windSpeed;

    setWindSpeed(currentWindSpeed);

  } catch (error) {

  setError(error.message || "Something went wrong");

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