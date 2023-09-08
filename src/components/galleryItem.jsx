/**
 * The above code is a React component called GalleryItem that displays an image, title, and
 * description.
 * @returns The GalleryItem component is returning a div element with the class name "gallery-item".
 * Inside the div, there is an img element with the src attribute set to the value of the image prop
 * and the alt attribute set to the value of the title prop. There is also an h3 element displaying the
 * value of the title prop and a p element displaying the value of the description prop.
 */
import React from 'react';

const GalleryItem = ({ title, image, description }) => {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GalleryItem;