import React from "react";
import "./../Styles/styles.css";

function imageGalleryItem({ webformatURL, largeImageURL, tags, openModal }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryImage"
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={openModal}
        loading="lazy"
      />
    </li>
  );
}

export default imageGalleryItem;
