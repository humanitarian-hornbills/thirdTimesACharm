import React from 'react';

const PhotoModal = ({ src }) => (
  <div id="pModal" className="pmodal">
    <div className="modal-content" >
      <span className="pclose">&times;</span>
      <img className="pModalPhoto" src={src} alt="photoModal"  />
    </div>
  </div>
);

export default PhotoModal;
