import { memo } from "react";

function SearchBar({ city, setCity, handleSearch }) {

  console.log("SearchBar Render");
 
  return (
    <form onSubmit={handleSearch}>


      <label htmlFor="city">Search City</label>

<input
  id="city"
  value={city}
  onChange={(event) => setCity(event.target.value)}
/>



      <button type="submit">Search</button>
    </form>
  );
}

export default memo(SearchBar);