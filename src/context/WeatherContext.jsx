import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <WeatherContext.Provider value={{ searchedCity, setSearchedCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

function useWeatherContext() {
  return useContext(WeatherContext);
}



export { WeatherProvider, useWeatherContext };

export default WeatherContext;