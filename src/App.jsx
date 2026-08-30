import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";

function App() {
  const [city, setCity] = useState("Gwalior");
   const [searchedCity, setSearchedCity] = useState("Gwalior");


  async function testAsync() {
  const result = await Promise.resolve("Weather Data");
  console.log(result);
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