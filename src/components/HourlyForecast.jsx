import HourlyCard from "./HourlyCard";

function HourlyForecast({ hourly }) {

 return (
  <div>
    <h2>Hourly Forecast</h2>

    <div className="hourly-forecast">
      {hourly?.time.slice(0, 24).map((time, index) => {

       const hourlyData = {
  time: time,
  temperature: hourly.temperature_2m[index]
};
      

        return (
          <HourlyCard
  key={hourlyData.time}
  time={hourlyData.time}
  temperature={hourlyData.temperature}
/>
        );
      })}
    </div>
  </div>
);
}

export default HourlyForecast;