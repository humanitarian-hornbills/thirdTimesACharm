import React, { useState } from 'react';

import {
  Modal, BigImage, Image, Close, ThumbnailsWrapper, Thumbnail,
} from '../elements/ImageModal.element.jsx';

// eslint-disable-next-line react/prop-types
const ImageModal = ({ curMainImageIndex, styles, getFullScreenClicked }) => {
  const [clicked, setClicked] = useState(false);

  const bgMain = styles.map((item, index) => {
    const { url } = item.photos[0];
    return index === curMainImageIndex && (
      <Image src={url} key={item.style_id} alt="styles" onClick={() => setClicked(!clicked)} clicked={clicked} />
    );
  });

  const buttonThumbnails = styles.map((item, index) => {
    const thumbnailUrl = item.photos[0].thumbnail_url;
    return (
      <Thumbnail src={thumbnailUrl} alt="style" />
    );
  });

  return (
    <Modal>
      <BigImage>

      
        {bgMain}
        <ThumbnailsWrapper>
          {buttonThumbnails}
        </ThumbnailsWrapper>
      </BigImage>

      <Close type="submit" onClick={() => getFullScreenClicked(false)}>
        <div>X</div>
      </Close>
    </Modal>
  );
};

export default ImageModal;
