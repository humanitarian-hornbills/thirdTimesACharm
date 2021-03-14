import React from 'react';
import PropTypes from 'prop-types';

const DisplayPhotos = ({ photos, photoModal, sendClickData }) => {
  const allPhotos = photos.map((photo) => (
    <div
      role="button"
      tabIndex="0"
      className="rNewPhoto "
      onClick={() => { photoModal(photo); sendClickData('new review added photo expanded'); }}
      onKeyPress={() => { photoModal(photo); sendClickData('new review added photo expanded'); }}
    >
      <img className="newRevTempPhoto"
        src={photo}
        alt=""
      />
    </div>
  ));
  return (
    <div>
      {allPhotos}
    </div>
  );
};

DisplayPhotos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.string,
  ),
  photoModal: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
};

DisplayPhotos.defaultProps = {
  photos: [],
};

export default DisplayPhotos;
