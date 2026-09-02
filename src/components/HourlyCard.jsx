function HourlyCard({ time, temperature }) {

    const hourlyDate = new Date(time);


  const today = new Date();

  const isToday =
    hourlyDate.getFullYear() === today.getFullYear() &&
    hourlyDate.getMonth() === today.getMonth() &&
    hourlyDate.getDate() === today.getDate();

    
  return (
    <div className="hourly-card">

        <p>{new Date(time).toLocaleDateString("en-US")}</p>


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