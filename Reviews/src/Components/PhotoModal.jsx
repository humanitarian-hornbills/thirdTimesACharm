import React from 'react';
import PropTypes from 'prop-types';

const PhotoModal = ({ src }) => (
  <div id="pModal" className="pmodal">
    <div className="modal-content">
      <span className="pclose">&times;</span>
      <img className="pModalPhoto" src={src} alt="photoModal" />
    </div>
  </div>
);

PhotoModal.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PhotoModal;
