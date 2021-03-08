import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../ImageComponent.jsx'

const DisplayPhotos = ({ photos }) => {
  const allPhotos = photos.map((photo) => <ImageComponent src={photo} />,
  // <img id="myImg" src={photo} alt="tempPhoto" width="50px" height="50px" />)
  );

  return (
    <>
      {allPhotos}
    </>
  );
};

export default DisplayPhotos;
