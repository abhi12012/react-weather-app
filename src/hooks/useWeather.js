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

  const coordinates = await getCoordinates(cleanCity);

  const weatherData = await getWeather(
    coordinates.latitude,
    coordinates.longitude
  );

}



  return {
    temperature,
     condition,
     windSpeed,
     loading,
     error
  };

}

export default useWeather;