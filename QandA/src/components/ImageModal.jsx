import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Background, ModalWrapper, ModalContent, CloseModalBtn, Form, Button,
} from '../elements/Modal.jsx';

const ImageModal = ({ setShowModal, photos, setPhotos }) => {
  const [photo, setPhoto] = useState('');
  const handleClick = (event) => {
    event.preventDefault();
    setPhotos([...photos, photo]);
    setPhoto('');
    setShowModal((prev) => !prev);
  };

  return (
    <Background>
      <ModalWrapper aria-label="Close button">
        <ModalContent>
          <h1>Add Your Photo</h1>
          {/* <h3>Select up to five photos</h3> */}
          <Form onSubmit={(event) => handleClick(event)}>
            <span>
              Photo:
              {'  '}
              <input type="url" placeholder="Photo URL link" onChange={(event) => setPhoto(event.target.value)} value={photo} />
            </span>
            <small>
              For privacy reasons, do not use your full name or email addresss.
            </small>
            {/* {photos.map((photo, index) => (
              <Image key={`${photo}-${index}`} src={photo} alt="" width="100" height="100" />
            ))} */}
            <Button type="submit">Submit</Button>
          </Form>
        </ModalContent>
        <CloseModalBtn onClick={() => setShowModal((prev) => !prev)} />
      </ModalWrapper>
    </Background>
  );
};

export default ImageModal;
