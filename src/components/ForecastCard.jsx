function ForecastCard({ date, maxTemperature, minTemperature, condition,icon }) {
  return (
    <div>
      <h3>{date}</h3>
      <p>{icon}</p>
      <p>Max: {maxTemperature}°C</p>
      <p>Min: {minTemperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default ForecastCard;