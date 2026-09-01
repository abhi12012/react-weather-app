import weatherConditions from "../utils/weatherConditions";
import ForecastCard from "./ForecastCard";

function Forecast({ forecast }) {
    console.log(forecast);
    console.log(forecast?.time);
  return (
    <div>
      <h2>5-Day Forecast</h2>

{forecast?.time.map((date, index) => (
  <ForecastCard
  key={date}
  date={new Date(date).toDateString()}
  maxTemperature={forecast.temperature_2m_max[index]}
  minTemperature={forecast.temperature_2m_min[index]}
  condition={weatherConditions[forecast.weather_code[index]]}
/>
))}

    </div>
  );
}

export default Forecast;