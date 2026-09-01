import weatherConditions from "../utils/weatherConditions";

function Forecast({ forecast }) {
    console.log(forecast);
    console.log(forecast?.time);
  return (
    <div>
      <h2>5-Day Forecast</h2>

{forecast?.time.map((date, index) => (
  <p key={date}>
    {new Date(date).toDateString()} — {forecast.temperature_2m_max[index]}°C / {forecast.temperature_2m_min[index]}°C — {weatherConditions[forecast.weather_code[index]]}
  </p>
))}
    </div>
  );
}

export default Forecast;