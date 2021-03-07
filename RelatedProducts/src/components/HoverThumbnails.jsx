import React, { useState } from 'react';

const HoverThumbnails = ({ images, isVisible, changeImg }) => {
  if (isVisible === false) {
    return (<></>);
  }

  const handleOnMouseEnter = (img) => {
    changeImg(img);
  };

  const handleOnMouseLeave = (img) => {
    changeImg(img);
  };

  const thumbNails = images.map((img) => (
    <div className="hover-thumb" onMouseEnter={() => { handleOnMouseEnter(img); }}><img src={img.thumbnail_url} alt="thumb" /></div>
  ));
  return (
    <div className="thumbnail-row" onMouseLeave={() => { handleOnMouseLeave(images[0]); }}>
      {thumbNails}
    </div>
  );
};

export default HoverThumbnails;
