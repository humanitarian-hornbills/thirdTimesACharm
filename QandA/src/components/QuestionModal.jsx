import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  // width: 800px;
  // height: 500px;
  // background: rgba(0, 0, 0, 0.8);
  // position: fixed;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9
  `;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  z-index: 10;
  border-radius: 10px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  `;

const QuestionInput = styled.input`
min-width: 300px;
min-height: 100px;
`;

const CloseModalBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10px;
  `;

const QuestionModal = ({
  showModal, setShowModal, addQuestion,
}) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [questionContent, setQuestionContent] = useState('');

  const handleClick = (event) => {
    const validate = [false, false, false];
    if (nickname.length > 0 && nickname.length < 60) {
      validate[0] = true;
      if (email.includes('@') && email.includes('.')) {
        if (email.length > 5 && email.length < 60) {
          validate[1] = true;
          if (questionContent.length > 0 && questionContent.length < 1000) {
            validate[2] = true;
            event.preventDefault();
            addQuestion(nickname, email, questionContent);
            setNickname('');
            setEmail('');
            setQuestionContent('');
            setShowModal((prev) => !prev);
          }
        }
      }
    }
    if (validate.includes(false)) {
      alert('Maximum nickname and email length: 60 characters            Maximum question length: 1000 characters');
    }
  };

  return (
    <Background>
      <ModalWrapper aria-label="Close button">
        <ModalContent>
          <h1>Ask Your Question</h1>
          <h3>About the product</h3>
          * required fields
          <p>
            <br />
            What is your nickname*:
            {' '}
            <input type="text" placeholder="Example: jackson11!" value={nickname} onChange={(event) => setNickname(event.target.value)} />
            <br />
            <small>
              For privacy reasons, do not use your full name or email addresss.
            </small>
          </p>
          <p>
            Your email*:
            {' '}
            <input type="text" placeholder="Why did you like this product or not?" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br />
            <small>
              For authentication reasons, you will not be emailed.
            </small>
          </p>
          <p>
            <br />
            <QuestionInput type="text" placeholder="Your question here" value={questionContent} onChange={(event) => setQuestionContent(event.target.value)} />
          </p>
          <br />
          <button type="button" onClick={(event) => handleClick(event)}>Submit</button>
        </ModalContent>
        <CloseModalBtn onClick={() => setShowModal((prev) => !prev)} />
      </ModalWrapper>
    </Background>
  );
};

export default QuestionModal;
