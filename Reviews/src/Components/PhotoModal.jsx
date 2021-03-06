import React from 'react';

const PhotoModal = ({ src }) => (
  <div id="pModal" className="pmodal">
    <div className="modal-content" style={{ width: 520 }}>
      <span className="close">&times;</span>
      <img src={src} alt="photoModal" style={{ width: 500 }} />
    </div>
  </div>
);

export default PhotoModal;

// make a copy of this and put the new review stuff in it