import React from 'react';

const PhotoModal = ({ src }) => (
  <div id="myModal" className="pmodal">
    <div className="modal-content" style={{ width: 520 }}>
      <span className="close">&times;</span>
      <img src={src} style={{ width: 500 }} />
    </div>
  </div>
);

export default PhotoModal;
