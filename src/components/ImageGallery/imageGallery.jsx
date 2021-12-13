import React from "react";
import "./../Styles/styles.css";
import ImageGalleryItem from "../ImageGalleryItem/imageGalleryItem";

function imageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

export default imageGallery;
