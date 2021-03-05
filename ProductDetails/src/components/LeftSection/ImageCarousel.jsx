/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Underline,
  LeftArrow, RightArrow, Image, Thumbnail, ThumbnailWrapper, Slider, FullscreenArrow, DownArrow,
  // eslint-disable-next-line import/extensions
} from '../../elements/ImageCarousel.element.jsx';

const ImageCarousel = ({ styles }) => {
  const [current, setCurrent] = useState(0);
  const [curThumbnail, setCurThumbnail] = useState(0);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const length = styles.length - 1;

  const preSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  const downSlide = () => {
    setCurThumbnail((previous) => previous + 1);
  };

  const imageUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      index === current && (
        <Image key={index} src={url} alt="Women dress" />
      )
    );
  });

  const thumbnailUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      <>
        <Thumbnail key={index} src={url} alt="Women dress" onClick={() => setCurrent(index)} />
        { index === current && <Underline />}
      </>
    );
  });

  return (
    <Slider>
      <FullscreenArrow />
      <LeftArrow onClick={preSlide} />
      <RightArrow onClick={nextSlide} />
      {imageUrl}
      {/* {thumbnailUrl} */}
      <ThumbnailWrapper>
        {thumbnailUrl}
        {styles.length > 7 && <DownArrow onClick={downSlide} />}
      </ThumbnailWrapper>
    </Slider>

  );
};

export default ImageCarousel;
