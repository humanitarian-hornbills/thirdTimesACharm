import React, { useState } from 'react';
import {
  Background, ModalWrapper, ModalContent, CloseModalBtn, Form,
} from '../elements/Modal.jsx';

const AnswerModal = ({
  showModal, setShowModal, productName, addAnswer,
}) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answerContent, setAnswerContent] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    // addAnswer(nickname, email, questionContent);
    console.log('Work in progress');
    setNickname('');
    setEmail('');
    setAnswerContent('');
    setShowModal((prev) => !prev);
  };

  return (
    <Background>
      <ModalWrapper aria-label="Close button">
        <ModalContent>
          <h1>Ask Your Question</h1>
          <h3>{`About ${productName}`}</h3>
          * required fields
          <Form onSubmit={(event) => handleClick(event)}>
            <span>
              <label htmlFor="nickname">What is your nickname*: </label>
              <input id="nickname" type="text" placeholder="Example: jackson11!" value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength="60" required />
            </span>
            <small>
              For privacy reasons, do not use your full name or email addresss.
            </small>
            <span>
              <label htmlFor="email">Your email*: </label>
              <input id="email" type="email" placeholder="Example: juno@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} maxLength="60" required />
            </span>
            <small>
              For authentication reasons, you will not be emailed.
            </small>
            <br />
            <textarea placeholder="Your question here" value={answerContent} onChange={(event) => setAnswerContent(event.target.value)} rows="5" cols="50" maxLength="1000" required />
            <button type="submit">Submit</button>
          </Form>
        </ModalContent>
        <CloseModalBtn onClick={() => setShowModal((prev) => !prev)} />
      </ModalWrapper>
    </Background>
  );
};

export default AnswerModal;
