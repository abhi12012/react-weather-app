import { memo } from "react";

function SearchBar({ city, setCity, handleSearch }) {
  console.log("SearchBar render");
  return (
    <form onSubmit={handleSearch}>
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default memo(SearchBar);