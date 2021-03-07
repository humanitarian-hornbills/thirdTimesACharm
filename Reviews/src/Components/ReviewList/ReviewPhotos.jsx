import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotos = ({ photos, photoModal }) => {
  const allPhotos = photos.map((photo) => (
    <img
    alt=""
      onClick={() => { photoModal(photo.url); }}
      src={photo.url}
      style={{ width: 50 }}
    />
  ));
  return (
    <>
      {allPhotos}
    </>
  );
};

export default ReviewPhotos;
