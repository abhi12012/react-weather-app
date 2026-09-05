import { useState, useReducer } from "react";

import {
  getCoordinates,
  getWeather
} from "../services/weatherService";

import weatherConditions from "../utils/weatherConditions";
import weatherIcons from "../utils/weatherIcons";





function weatherReducer(state, action) {
  switch (action.type) {

    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: ""
      };


      case "FETCH_FINISH":
  return {
    ...state,
    loading: false
  };

    case "FETCH_SUCCESS":
      return {
        ...state,
        temperature: action.payload.temperature,
        condition: action.payload.condition,
        loading: false,
        error: ""
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}






function useWeather() {

  const initialWeatherState = {
  temperature: null,
  condition: "",
  loading: false,
  error: ""
};

const [weatherState, dispatch] = useReducer(
  weatherReducer,
  initialWeatherState
);


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
  const [forecast, setForecast] = useState(null);
  const [hourly, setHourly] = useState(null);
  
  


function setWeatherError(message) {
  setError(message);
}







 async function fetchWeather(cleanCity, latitude, longitude) {



 dispatch({ type: "FETCH_START" });

  setError("");

  try {

   const coordinates =
  latitude !== undefined && longitude !== undefined
    ? { latitude, longitude }
    : await getCoordinates(cleanCity);

const weatherData = await getWeather(
  coordinates.latitude,
  coordinates.longitude
);



dispatch({
  type: "FETCH_SUCCESS",
  payload: {
    temperature: weatherData.temperature,
    condition: weatherConditions[weatherData.weatherCode] || "Unknown Weather"
  }
});


    

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



setForecast(weatherData.forecast);

setHourly(weatherData.hourly);



    const weatherCode = weatherData.weatherCode;

    const currentCondition =
      weatherConditions[weatherCode] || "Unknown Weather";

    setCondition(currentCondition);


    const currentIcon =
  weatherIcons[weatherCode] || "🌦️";

  setIcon(currentIcon);


    const currentWindSpeed = weatherData.windSpeed;

    setWindSpeed(currentWindSpeed);

  } 
  
  catch (error) {
  dispatch({
    type: "FETCH_ERROR",
    payload: error.message || "Something went wrong"
  });
}

finally {

 dispatch({ type: "FETCH_FINISH" });

}

}
return {
  temperature: weatherState.temperature,
  condition,
  windSpeed,
  loading: weatherState.loading,
  error,
  fetchWeather,
  feelsLike,
  humidity,
  pressure,
  visibility,
  sunrise,
sunset,
forecast,
hourly,
setWeatherError,
};

}

export default useWeather;