
import { useState, useEffect } from "react";
import WeatherHeading from "./components/WeatherHeading";
import useWeather from "./hooks/useWeather";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import useLocalStorage from "./hooks/useLocalStorage";






function App() {

 
const {
  temperature: hookTemperature,
  feelsLike: hookFeelsLike,
  condition: hookCondition,
  icon: hookIcon,
  windSpeed: hookWindSpeed,
  loading: hookLoading,
  error: hookError,
  fetchWeather: hookFetchWeather,
  humidity: hookHumidity,
  pressure: hookPressure,
  visibility: hookVisibility,
  sunrise: hookSunrise,
sunset: hookSunset,
forecast: hookForecast,
hourly: hookHourly,
} = useWeather();




  const [city, setCity] = useState("Gwalior");
  const [searchedCity, setSearchedCity] = useState("");
 const [searchHistory, setSearchHistory] = useLocalStorage(
  "searchHistory",
  []
);
  
   
   useEffect(() => {
  
  setSearchedCity(city);
  hookFetchWeather(city);
}, []);


   const [error, setError] = useState("");





   
  function handleSearch(event) {
  event.preventDefault();

  const cleanCity = city.trim();

  if (city.trim() === "") {
  setError("Please enter a city");
  return;
}

  

  

  






  setSearchedCity(cleanCity);




   
  hookFetchWeather(cleanCity);

 
}

  return (


  <div>


{hookLoading ? (
  <p>Loading...</p>

) : hookError ? (
  <p>{hookError}</p>
) : !searchedCity ? (
  <p>🌦️ Search for a city</p>
) : (

  
  <WeatherHeading
  city={searchedCity}
  temperature={hookTemperature}
  feelsLike={hookFeelsLike}
  condition={hookCondition}
  icon={hookIcon}
  windSpeed={hookWindSpeed}
  humidity={hookHumidity}
  pressure={hookPressure}
  visibility={hookVisibility}
  sunrise={hookSunrise}
sunset={hookSunset}
/>


)}



<Forecast forecast={hookForecast} />
<HourlyForecast hourly={hookHourly} />





<button onClick={() => hookFetchWeather("Gwalior")}>
  Test Hook
</button>


    <form onSubmit={handleSearch}>
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  </div>
);
}

export default App;