import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  margin-right: 10px;
  `;

const Photos = ({ photos }) => (
  <div>
    {photos.map((photo) => (
      <Image key={photo.id} src={photo.url} alt="" width="100" height="100" />
    ))}
  </div>
);

export default Photos;
