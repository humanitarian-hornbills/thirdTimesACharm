import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../ImageComponent.jsx';

const ReviewPhotos = ({ photos, photoModal }) => {
  const allPhotos = photos.map((photo) => <img onClick={() => {photoModal(photo.url)}} src={photo.url} style={{width: 50}}/>);
  return (
    <>
      {allPhotos}
    </>
  );
};

export default ReviewPhotos;
