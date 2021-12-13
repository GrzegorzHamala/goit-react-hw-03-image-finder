import React from "react";
import "./../Styles/styles.css";

function Searchbar({ onSubmit, inputValue, value }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchFormButton">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/15/14/magnifying-glass-1293096_960_720.png"
            alt="search"
            width="22"
          />
        </button>

        <input
          className="SearchFormInput"
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputValue}
        />
      </form>
    </header>
  );
}

export default Searchbar;
