import HourlyCard from "./HourlyCard";

function HourlyForecast({ hourly }) {

 return (
  <div>
    <h2>Hourly Forecast</h2>

    <div className="hourly-forecast">
      {hourly?.time.slice(0, 24).map((time, index) => (
        <HourlyCard
          key={time}
          time={time}
          temperature={hourly.temperature_2m[index]}
        />
      ))}
    </div>
  </div>
);
}

export default HourlyForecast;