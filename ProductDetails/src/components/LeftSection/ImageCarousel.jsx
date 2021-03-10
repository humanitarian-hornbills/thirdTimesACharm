/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  LeftArrow, RightArrow, Image,
  FullscreenArrow, ImageWrapper,
} from '../../elements/ImageCarousel.element.jsx';

const ImageCarousel = ({
  styles,
  getCurMainImageIndex,
  getFullScreenClicked, mainCurrent,
  getMainCurrent,
}) => {
  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const length = styles.length - 1;

  const preSlide = () => {
    getMainCurrent(mainCurrent === 0 ? length : mainCurrent - 1);
  };

  const nextSlide = () => {
    getMainCurrent(mainCurrent === length ? 0 : mainCurrent + 1);
  };

  const handleOnExpandClick = () => {
    getCurMainImageIndex(mainCurrent);
    getFullScreenClicked(true);
  };

  const imageUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      index === mainCurrent && (
        <Image key={item.style_id} src={url} onClick={handleOnExpandClick} alt="styles" />

      )
    );
  });
  return (
    <ImageWrapper>
      <FullscreenArrow onClick={handleOnExpandClick} />
      {
        mainCurrent !== 0
        && <LeftArrow onClick={preSlide} />
      }
      {
        mainCurrent !== length
        && <RightArrow onClick={nextSlide} />
      }
      {imageUrl}
    </ImageWrapper>
  );
};

export default ImageCarousel;
