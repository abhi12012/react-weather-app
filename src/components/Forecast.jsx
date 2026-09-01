function Forecast({ forecast }) {
    console.log(forecast);
    console.log(forecast?.time);
  return (
    <div>
      <h2>5-Day Forecast</h2>

      {forecast?.time.map((date) => (
  <p>{date}</p>
))}
    </div>
  );
}

export default Forecast;