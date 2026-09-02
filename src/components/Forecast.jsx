import weatherConditions from "../utils/weatherConditions";
import ForecastCard from "./ForecastCard";


const weatherIcons = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌦️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  80: "🌦️",
  81: "🌧️",
  82: "🌧️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️"
};



function getDayName(date, index) {
  if (index === 0) {
    return "Today";
  }

  if (index === 1) {
    return "Tomorrow";
  }

  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long"
  });
}

function Forecast({ forecast }) {
    console.log(forecast);
    console.log(forecast?.time);
  return (
    <div>
      <h2>5-Day Forecast</h2>

{forecast?.time.map((date, index) => (
  <ForecastCard
  key={date}
 date={getDayName(date, index)}
  maxTemperature={forecast.temperature_2m_max[index]}
  minTemperature={forecast.temperature_2m_min[index]}
  condition={weatherConditions[forecast.weather_code[index]]}
  icon={weatherIcons[forecast.weather_code[index]]}
/>
))}

    </div>
  );
}

export default Forecast;