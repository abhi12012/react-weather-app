function App() {
  const city = "Gwalior";
  const temperature = 28;

  return (
    <div>
      <h1>Weather in {city} 🌦️</h1>
      <h2>{temperature}°C</h2>
      <p>Clear Sky</p>
    </div>
  );
}

export default App;