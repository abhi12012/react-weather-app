import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {

    const storedValue = localStorage.getItem(key);
    console.log(storedValue);

    const [value, setValue] = useState(initialValue);

   useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [value]);

    return [value, setValue];

}

export default useLocalStorage;