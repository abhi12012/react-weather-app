function HourlyCard({ time, temperature }) {

    

  return (
    <div className="hourly-card">

      


      <p>
  {new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true
  })}
</p>


    <h3>{Math.round(temperature)}°C</h3>
    </div>
  );
}

export default HourlyCard;