import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";

function App() {
  const [city, setCity] = useState("Gwalior");
   const [searchedCity, setSearchedCity] = useState("Gwalior");


 async function testAsync() {
  const response = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=Gwalior"
  );

  const data = await response.json();

  console.log(data.results[0]);
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
        temperature={28}
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