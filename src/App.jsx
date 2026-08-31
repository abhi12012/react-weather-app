import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";



const weatherConditions = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
};

function App() {
  const [city, setCity] = useState("Gwalior");
   const [searchedCity, setSearchedCity] = useState("Gwalior");
   const [temperature, setTemperature] = useState(null);
   const [condition, setCondition] = useState("");
   const [windSpeed, setWindSpeed] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");


 async function testAsync() {
  try {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );

  const data = await response.json();

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  

  const weatherResponse = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code`
);

const weatherData = await weatherResponse.json();

const currentTemperature = weatherData.current.temperature_2m;
setTemperature(currentTemperature);

const weatherCode = weatherData.current.weather_code;





const currentCondition = weatherConditions[weatherCode];

setCondition(currentCondition);




const currentWindSpeed = weatherData.current.wind_speed_10m;
setWindSpeed(currentWindSpeed);

setLoading(false);

  } catch (error) {
  setError("Something went wrong");
  setLoading(false);


  }
}



  function handleSearch(event) {
  event.preventDefault();

  setLoading(true);

  setError("");

  setSearchedCity(city);

  testAsync();

 
}

  return (


  <div>



    {loading ? (
  <p>Loading...</p>
) : error ? (
  <p>{error}</p>
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