import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";

function App() {
  const [city, setCity] = useState("Gwalior");
   const [searchedCity, setSearchedCity] = useState("Gwalior");
   const [temperature, setTemperature] = useState(null);


 async function testAsync() {
  const response = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=Gwalior"
  );

  const data = await response.json();

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  console.log(latitude);
  console.log(longitude);


  const weatherResponse = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
);

const weatherData = await weatherResponse.json();

const currentTemperature = weatherData.current.temperature_2m;
setTemperature(currentTemperature);


const windSpeed = weatherData.current.wind_speed_10m;

console.log(temperature);
console.log(windSpeed);


}



  function handleSearch(event) {
  event.preventDefault();

  setSearchedCity(city);

  testAsync();

  console.log("Searching for:", city);
}

  return (
  <div>
    <WeatherHeading
      city={city}
      temperature={temperature}
      condition="Clear Sky"
    />

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