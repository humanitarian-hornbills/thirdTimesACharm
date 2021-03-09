import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotos = ({ photos, photoModal }) => {
  let count = 0;
  const allPhotos = photos.map((photo) => (
    <img
    alt=""
      onClick={() => { photoModal(photo.url); }}
      src={photo.url}
      style={{ width: 50 }}
      key = {count++}
    />
  ));
  return (
    <>
      {allPhotos}
    </>
  );
};

export default ReviewPhotos;
