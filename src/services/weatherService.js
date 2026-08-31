export async function getCoordinates(cityName) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
  );

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  return {
    latitude,
    longitude
  };
}