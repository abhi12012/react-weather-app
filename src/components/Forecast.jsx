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
  />
))}

    </div>
  );
}

export default Forecast;