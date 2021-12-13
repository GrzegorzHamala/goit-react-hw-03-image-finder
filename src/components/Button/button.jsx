import React from "react";
import "./../Styles/styles.css";

function button({ fetchMoreImages, label }) {
  return (
    <button type="button" className="Button" onClick={fetchMoreImages}>
      {label}
    </button>
  );
}

export default button;
