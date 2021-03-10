import React, { useState } from 'react';
import {
  Underline,
  Thumbnail, Thumbnails, ThumbnailWrapper, UpArrow, DownArrow,
} from '../../elements/ThumbnailGallery.element.jsx';

// eslint-disable-next-line react/prop-types
const ThumbnailGallery = ({ styles, mainCurrent, getMainCurrent }) => {
  const length = styles.length - 1;
  const [upShow, setUpShow] = useState(false);
  const [downShow, setDownShow] = useState(false);

  const downSlide = () => {
    getMainCurrent(mainCurrent === length ? length : mainCurrent + 1);
    setDownShow(true);
    setUpShow(false);
  };

  const upSlide = () => {
    getMainCurrent(mainCurrent === 0 ? 0 : mainCurrent - 1);
    setUpShow(true);
    setDownShow(false);
  };

  const thumbnailUrFirst7 = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      (
        index < 7
        && (
          <Thumbnails key={item.style_id} curImage={mainCurrent === index}>
            <Thumbnail key={item.style_id} src={url} alt="Women dress" onClick={() => getMainCurrent(index)} />
            {index === mainCurrent
              && <Underline />}
          </Thumbnails>
        )
      )
    );
  });

  const thumbnailUrlLast7 = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      (
        index >= 7
        && (
          <Thumbnails key={item.style_id} curImage={mainCurrent === index}>
            <Thumbnail key={item.style_id} src={url} alt="Women dress" onClick={() => getMainCurrent(index)} />
            {index === mainCurrent
              && <Underline />}
          </Thumbnails>
        )
      )
    );
  });

  let showThunmbnails = '';
  if (upShow) {
    showThunmbnails = thumbnailUrFirst7;
  } else if (downShow) {
    showThunmbnails = thumbnailUrlLast7;
  } else {
    showThunmbnails = thumbnailUrFirst7;
  }

  return (
    <>
      {/* {thumbnailUrl} */}
      <ThumbnailWrapper moreThanSeven>
        {
          length > 6 && mainCurrent !== 0
          && <UpArrow onClick={upSlide} />
        }
        {showThunmbnails}
        {
          length > 6 && mainCurrent !== length
          && <DownArrow onClick={downSlide} />
        }
      </ThumbnailWrapper>
    </>
  );
};
export default ThumbnailGallery;
