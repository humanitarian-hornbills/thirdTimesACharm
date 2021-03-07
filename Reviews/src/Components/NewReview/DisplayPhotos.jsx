import React from 'react';
import PropTypes from 'prop-types';

const DisplayPhotos = ({ photos, photoModal }) => {
  const allPhotos = photos.map((photo) => (
    <img
      onClick={() => { photoModal(photo); }}
      src={photo}
      style={{ width: 50 }}
      alt=""
    />
  ));
  return (
    <>
      {allPhotos}
    </>
  );
};

export default DisplayPhotos;
