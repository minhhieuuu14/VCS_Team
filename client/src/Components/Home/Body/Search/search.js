// Search.js
import React from "react";
import "../body.css"; // Import the CSS file for styling

function Search() {
  return (
    <div className="search-container">
      <select className="select-district">
        <option value="" style={{ color: "red", fontSize: "25px" }}>
          -- Tìm theo Quận --
        </option>
        <option value="district1">Quận 1</option>
        <option value="district2">Quận 2</option>
        <option value="district3">Quận 3</option>
        {/* Add more options as needed */}
      </select>
      <button className="search-button">Tìm kiếm</button>
    </div>
  );
}

export default Search;
