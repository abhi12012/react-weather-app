import HourlyCard from "./HourlyCard";

function HourlyForecast({ hourly }) {

  return (
    <div>
      <h2>Hourly Forecast</h2>

      {hourly?.time.map((time, index) => (
        <HourlyCard
          key={time}
          time={time}
          temperature={hourly.temperature_2m[index]}
        />
      ))}
    </div>
  );
}

export default HourlyForecast;