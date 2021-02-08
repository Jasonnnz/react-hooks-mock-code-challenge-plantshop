import React from "react";

function Search({findPlant, query}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Type a name to search..."
        onChange={(e) => findPlant(e)}
      />
    </div>
  );
}

export default Search;
