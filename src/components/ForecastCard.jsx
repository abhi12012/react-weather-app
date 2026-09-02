function ForecastCard({ date, maxTemperature, minTemperature, condition,icon }) {
  return (
    <div className="forecast-card">
  <h3>{date}</h3>

  <div className="forecast-icon">
    {icon}
  </div>

  <p>{condition}</p>

  <div className="forecast-temperature">
    <span>{maxTemperature}°C</span>
    <span>{minTemperature}°C</span>
  </div>
</div>
  );
}

export default ForecastCard;