import { getCoordinates, getWeather } from "./services/weatherService";
import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";



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
  const [city, setCity] = useState("Gwalior");
  const [searchedCity, setSearchedCity] = useState("");
   const [temperature, setTemperature] = useState(null);
   const [condition, setCondition] = useState("");
   const [windSpeed, setWindSpeed] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");




async function fetchWeather(cleanCity) {
  setError("");
  try {

    const coordinates = await getCoordinates(cleanCity);

    const weatherData = await getWeather(
  coordinates.latitude,
  coordinates.longitude
);


 
  
const currentTemperature = weatherData.temperature;
console.log("Temperature:", currentTemperature);

setTemperature(currentTemperature);

const weatherCode = weatherData.weatherCode;





const currentCondition =
  weatherConditions[weatherCode] || "Unknown Weather";

setCondition(currentCondition);




const currentWindSpeed = weatherData.windSpeed;
setWindSpeed(currentWindSpeed);

setLoading(false);

  } catch (error) {

  setError(error.message || "Something went wrong");

} finally {

  setLoading(false);

}
}



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

  fetchWeather(cleanCity);

 
}

  return (


  <div>


{loading ? (
  <p>Loading...</p>
) : error ? (
  <p>{error}</p>
) : !searchedCity ? (
  <p>🌦️ Search for a city</p>
) : (
  <WeatherHeading
    city={searchedCity}
    temperature={temperature}
    condition={condition}
    windSpeed={windSpeed}
  />
)}

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