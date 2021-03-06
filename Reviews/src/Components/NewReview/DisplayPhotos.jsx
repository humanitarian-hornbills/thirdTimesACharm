import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../ImageComponent.jsx'

const DisplayPhotos = ({ photos, photoModal }) => {
  const allPhotos = photos.map((photo) => <img onClick={() => {photoModal(photo)}} src={photo} style={{width: 50}}/>);
  return (
    <>
      {allPhotos}
    </>
  );
};

export default DisplayPhotos;
