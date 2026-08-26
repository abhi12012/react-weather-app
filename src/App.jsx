import { useState } from "react";
import WeatherHeading from "./components/WeatherHeading";

function App() {
  const [city, setCity] = useState("Gwalior");

  return (
    <div>
      <WeatherHeading
        city={city}
        temperature={28}
        condition="Clear Sky"
      />

      <button onClick={() => setCity("Delhi")}>
        Change City
      </button>
    </div>
  );
}

export default App;