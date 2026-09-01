import { getCoordinates, getWeather } from "./services/weatherService";
import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";
import useWeather from "./hooks/useWeather";



const weatherConditions = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Drizzle",
53: "Drizzle",
55: "Drizzle",
56: "Freezing Drizzle",
57: "Freezing Drizzle",
61: "Rain",
63: "Rain",
65: "Heavy Rain",
66: "Freezing Rain",
67: "Heavy Freezing Rain",
71: "Snow",
73: "Snow",
75: "Heavy Snow",
77: "Snow Grains",
80: "Rain Showers",
81: "Rain Showers",
82: "Heavy Rain Showers",
95: "Thunderstorm",
96: "Thunderstorm with Hail",
99: "Thunderstorm with Hail",
};

function App() {


const {
  temperature: hookTemperature,
  condition: hookCondition,
  windSpeed: hookWindSpeed,
  loading: hookLoading,
  error: hookError,
  fetchWeather: hookFetchWeather
} = useWeather();





  const [city, setCity] = useState("Gwalior");
  const [searchedCity, setSearchedCity] = useState("");
   const [temperature, setTemperature] = useState(null);
   const [condition, setCondition] = useState("");
   const [windSpeed, setWindSpeed] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");





   
  function handleSearch(event) {
  event.preventDefault();

  const cleanCity = city.trim();

  if (city.trim() === "") {
  setError("Please enter a city");
  return;
}

  setLoading(true);

  setError("");

  setTemperature(null);
setCondition("");
setWindSpeed(null);




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
  condition={hookCondition}
  windSpeed={hookWindSpeed}
/>
)}



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