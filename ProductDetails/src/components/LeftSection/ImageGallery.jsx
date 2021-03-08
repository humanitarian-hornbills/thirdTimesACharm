/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageCarousel from './ImageCarousel.jsx';

// eslint-disable-next-line react/prop-types
const ImageGallery = ({ getStyles, id, getSelectedStyle }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`/products/${id}/styles`)
      .then((response) => {
        const { results } = response.data;
        setStyles(results);
        getStyles(results);
        getSelectedStyle(results[0].style_id);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="image_gallery">
      <ImageCarousel styles={styles} />
    </div>
  );
};

export default ImageGallery;
