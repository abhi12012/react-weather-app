import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState([]);

  return [value, setValue];
}
export default useLocalStorage;