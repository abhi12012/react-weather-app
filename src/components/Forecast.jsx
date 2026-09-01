function Forecast({ forecast }) {
    console.log(forecast);
    console.log(forecast?.time);
  return (
    <div>
      <h2>5-Day Forecast</h2>


      {forecast?.time.map((date, index) => (
  <p key={date}>
    {date} — {forecast.temperature_2m_max[index]}°C
  </p>
))}

    </div>
  );
}

export default Forecast;