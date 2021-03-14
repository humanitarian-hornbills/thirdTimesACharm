import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Background, ModalWrapper, ModalContent, CloseModalBtn, Form, Button, SmallButton,
} from '../elements/Modal.jsx';
import ImageModal from './ImageModal.jsx';

const Image = styled.img`
  margin-right: 10px;
  `;

const AnswerModal = ({
  showModal, setShowModal, productName, targetQ, addAnswer,
}) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answerContent, setAnswerContent] = useState('');
  const [showImgModal, setShowImgModal] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    addAnswer(nickname, email, answerContent, photos);
    setNickname('');
    setEmail('');
    setAnswerContent('');
    setPhotos([]);
    setShowModal((prev) => !prev);
  };

  console.log(photos);

  return (
    <>
      <Background>
        <ModalWrapper aria-label="Close button">
          <ModalContent>
            <h1>Submit Your Answer</h1>
            <h3>{`${productName}: ${targetQ.question_body}`}</h3>
            * required fields
            <Form onSubmit={(event) => handleClick(event)}>
              <span>
                <label htmlFor="nickname">What is your nickname*: </label>
                <input id="nickname" type="text" placeholder="E.g. jackson11!" value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength="60" required />
              </span>
              <small>
                For privacy reasons, do not use your full name or email addresss.
              </small>
              <span>
                <label htmlFor="email">Your email*: </label>
                <input id="email" type="email" placeholder="E.g. juno@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} maxLength="60" required />
              </span>
              <small>
                For authentication reasons, you will not be emailed.
              </small>
              {photos.length < 5
                && <SmallButton type="button" onClick={() => setShowImgModal((prev) => !prev)}>Add your photos</SmallButton>}
              <article>
                {photos.length > 0
                  && photos.map((photo) => (
                    <Image key={photo} src={photo} alt="" height="80" width="80" />
                  ))}
              </article>
              <textarea placeholder="Your answer here" value={answerContent} onChange={(event) => setAnswerContent(event.target.value)} rows="5" cols="50" maxLength="1000" required />
              <Button type="submit">Submit</Button>
            </Form>
          </ModalContent>
          <CloseModalBtn onClick={() => setShowModal((prev) => !prev)} />
        </ModalWrapper>
      </Background>
      {showImgModal
        && (
          <ImageModal
            showModal={showImgModal}
            setShowModal={setShowImgModal}
            photos={photos}
            setPhotos={setPhotos}
          />
        )}
    </>
  );
};

export default AnswerModal;
