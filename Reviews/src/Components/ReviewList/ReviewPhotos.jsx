import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotos = ({ photos, photoModal, sendClickData }) => {
  const allPhotos = photos.map((photo) => (
    <div
      role="button"
      tabIndex="0"
      className="rNewPhoto"
      onKeyPress={() => { photoModal(photo.url); sendClickData('expand review photo'); }}
      onClick={() => { photoModal(photo.url); sendClickData('expand review photo'); }}
      key={photo.url}
    >
      <img alt="" src={photo.url} />
    </div>
  ));
  return (
    <span className="reviewBody">
      {allPhotos}
    </span>
  );
};

ReviewPhotos.propTypes = {
  photoModal: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    }),
  ),
};

ReviewPhotos.defaultProps = {
  photos: [],
};

export default ReviewPhotos;
