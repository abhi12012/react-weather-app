import { useState } from "react";

function useWeather() {

  const [temperature, setTemperature] = useState(null);

  return {
    temperature
  };

}

export default useWeather;