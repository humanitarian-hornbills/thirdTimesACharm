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

  // <img
  //   className="small"
  //   src={photo.url}
  //   onClick={this.handleShowDialog}
  //   onKeyPress={this.handleShowDialog}
  //   alt="small"
  //   width="50px"
  //   role="presentation"
  // />;

export default ReviewPhotos;

// const ReviewPhotos = ({ photos }) => {
//   const allPhotos = photos.map((photo) => <ImageComponent src={photo.url} />);
//   return (
//     <>
//       {allPhotos}
//     </>
//   );
// };
