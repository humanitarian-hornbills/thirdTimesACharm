import React from 'react';
import PropTypes from 'prop-types';

const DisplayPhotos = ({ photos, photoModal }) => {
  const allPhotos = photos.map((photo) => (
    <img className="rNewPhoto"
      onClick={() => { photoModal(photo); }}
      src={photo}
      style={{ width: 50 }}
      alt=""
    />
  ));
  return (
    <div >
      {allPhotos}
    </div>
  );
};

export default DisplayPhotos;
