import { useState, useEffect, useCallback, useContext } from "react";
import WeatherHeading from "./components/WeatherHeading";
import useWeather from "./hooks/useWeather";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import useLocalStorage from "./hooks/useLocalStorage";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import LoadingError from "./components/LoadingError";
import WeatherContext from "./context/WeatherContext";







function App() {

 
const {
  temperature: hookTemperature,
  feelsLike: hookFeelsLike,
  condition: hookCondition,
  icon: hookIcon,
  windSpeed: hookWindSpeed,
  loading: hookLoading,
  error: hookError,
  fetchWeather: hookFetchWeather,
  setWeatherError: hookSetWeatherError,
  humidity: hookHumidity,
  pressure: hookPressure,
  visibility: hookVisibility,
  sunrise: hookSunrise,
sunset: hookSunset,
forecast: hookForecast,
hourly: hookHourly,
} = useWeather();




const { searchedCity: contextSearchedCity, setSearchedCity: contextSetSearchedCity } =
  useContext(WeatherContext);


  const [city, setCity] = useState("Gwalior");
  const [searchedCity, setSearchedCity] = useState("");
 const [searchHistory, setSearchHistory] = useLocalStorage(
  "searchHistory",
  []
);
  
const [favorites, setFavorites] = useLocalStorage(
  "favorites",
  []
);
const isFavorite = favorites.includes(searchedCity);
   
   useEffect(() => {
  
  setSearchedCity(city);
  hookFetchWeather(city);
}, []);


   const [error, setError] = useState("");





   
 const handleSearch = useCallback((event) => {
  event.preventDefault();

  const cleanCity = city.trim();

  if (city.trim() === "") {
  setError("Please enter a city");
  return;
}

  

  

  






  setSearchedCity(cleanCity);

  if (!searchHistory.includes(cleanCity)) {
setSearchHistory([cleanCity, ...searchHistory]);
}

hookFetchWeather(cleanCity);

}, [city, searchHistory, hookFetchWeather]);


function renderWeather() {
  if (hookLoading) {
    return <LoadingError loading={hookLoading} error={hookError} />;
  } else if (hookError) {
    return <LoadingError loading={hookLoading} error={hookError} />;
  } else if (searchedCity) {
    return (
      <WeatherHeading city={searchedCity}>
        <CurrentWeather
          temperature={hookTemperature}
          feelsLike={hookFeelsLike}
          condition={hookCondition}
          icon={hookIcon}
          windSpeed={hookWindSpeed}
          humidity={hookHumidity}
          pressure={hookPressure}
          visibility={hookVisibility}
          sunrise={hookSunrise}
          sunset={hookSunset}
        />
      </WeatherHeading>
    );
  } else {
    return <p>🌦️ Search for a city</p>;
  }
}



 return (
  <WeatherContext.Provider value={{ searchedCity, setSearchedCity }}>
    <div>

<LoadingError
  loading={hookLoading}
  error={hookError}
/>

{!hookLoading && !hookError && !searchedCity ? (
  <p>🌦️ Search for a city</p>
) : null}

{!hookLoading && !hookError ? (
  searchedCity ? (
    <WeatherHeading city={searchedCity}>
      <CurrentWeather
        temperature={hookTemperature}
        feelsLike={hookFeelsLike}
        condition={hookCondition}
        icon={hookIcon}
        windSpeed={hookWindSpeed}
        humidity={hookHumidity}
        pressure={hookPressure}
        visibility={hookVisibility}
        sunrise={hookSunrise}
        sunset={hookSunset}
      />
    </WeatherHeading>
  ) : (
    <p>🌦️ Search for a city</p>
  )
) : null}


<button
  onClick={() => {

    if (favorites.includes(searchedCity)) {
  setFavorites(
    favorites.filter((city) => city !== searchedCity)
  );
} else {
  setFavorites([...favorites, searchedCity]);
}

  }}
>
  {isFavorite ? "❤️ Favorited" : "❤️ Favorite"}
</button>






<h2>Favorites</h2>

<ul>
  {favorites.map((city, index) => (

   <li
  key={index}
  onClick={() => hookFetchWeather(city)}
>
  {city}
</li>

  ))}
</ul>






<button
  onClick={() => {
    hookSetWeatherError("");
   navigator.geolocation.getCurrentPosition(
  (position) => {


    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    

    setSearchedCity("My Location");

    hookFetchWeather(null, latitude, longitude);
  },



  (error) => {
 
  hookSetWeatherError(error.message);
}

);
  }}
>
  📍 Use My Location
</button>





<h2>Recent Searches</h2>

<ul>
  {searchHistory.map((city, index) => (

    <li key={index} onClick={() => hookFetchWeather(city)}>{city}</li>

  ))}
</ul>

<Forecast forecast={hookForecast} />
<HourlyForecast hourly={hookHourly} />





<button onClick={() => hookFetchWeather("Gwalior")}>
  Test Hook
</button>


    <SearchBar
  city={city}
  setCity={setCity}
  handleSearch={handleSearch}
/>

      </div>
  </WeatherContext.Provider>
);
}

export default App;