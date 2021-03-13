import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotos = ({ photos, photoModal, sendClickData }) => {
  let count = 0;
  const allPhotos = photos.map((photo) => (
    <img
      className="reviewBody"
      alt=""
      onClick={() => { photoModal(photo.url); sendClickData('expand review photo'); }}
      src={photo.url}
      style={{ width: 50 }}
      key={count++}
    />
  ));
  return (
    <span className="reviewBody reviewPhotos">
      {allPhotos}
    </span>
  );
};

export default ReviewPhotos;
