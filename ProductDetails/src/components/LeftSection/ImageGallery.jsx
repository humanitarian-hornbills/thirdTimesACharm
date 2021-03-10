/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageCarousel from './ImageCarousel.jsx';

const ImageGallery = ({
  getStyles,
  id, getSelectedStyle,
  getCurMainImageIndex,
  getFullScreenClicked,
  mainCurrent,
  getMainCurrent,
}) => {
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

    <ImageCarousel
      styles={styles}
      getCurMainImageIndex={getCurMainImageIndex}
      getFullScreenClicked={getFullScreenClicked}
      mainCurrent={mainCurrent}
      getMainCurrent={getMainCurrent}
    />

  );
};

export default ImageGallery;
