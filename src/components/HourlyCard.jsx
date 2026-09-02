function HourlyCard({ time, temperature }) {
  return (
    <div className="hourly-card">
      <p>{time}</p>
      <p>{temperature}°C</p>
    </div>
  );
}

export default HourlyCard;