import { createContext, useState } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <WeatherContext.Provider value={{ searchedCity, setSearchedCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };

export default WeatherContext;