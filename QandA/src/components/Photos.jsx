import React from 'react';

const Photos = ({ photos }) => (
  <div>
    {photos.map((photo) => (
      <img key={photo.id} src={photo.url} alt="" width="100" height="100" />
    ))}
  </div>
);

export default Photos;
