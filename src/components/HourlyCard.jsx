function HourlyCard({ time, temperature }) {
  return (
    <div className="hourly-card">


      <p>
  {new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true
  })}
</p>


     <p>{Math.round(temperature)}°C</p>
    </div>
  );
}

export default HourlyCard;