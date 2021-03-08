import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../ImageComponent.jsx'

const ReviewPhotos = ({ photos }) => {
  const allPhotos = photos.map((photo) => <ImageComponent src={photo.url} />);
  return (
    <>
      {allPhotos}
    </>
  );
};

export default ReviewPhotos;
