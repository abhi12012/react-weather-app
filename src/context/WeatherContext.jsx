import { createContext, useState, useContext, useReducer } from "react";

const WeatherContext = createContext();


function weatherContextReducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return action.payload;

    default:
      return state;
  }
}



function WeatherProvider({ children }) {
  const [searchedCity, setSearchedCity] = useState("");

  function setSearchedCityWithReducer(city) {
  weatherContextDispatch({
    type: "SET_CITY",
    payload: city
  });
}



  const [weatherContextState, weatherContextDispatch] = useReducer(
  weatherContextReducer,
  ""
);

  return (
    <WeatherContext.Provider
  value={{
    searchedCity,
    setSearchedCity,
    weatherContextState,
    weatherContextDispatch
  }}
>
<button
  onClick={() => setSearchedCityWithReducer("Mumbai")}
>
  Test Context Reducer
</button>

      {children}
    </WeatherContext.Provider>
  );
}

function useWeatherContext() {
  return useContext(WeatherContext);
}



export { WeatherProvider, useWeatherContext };

export default WeatherContext;