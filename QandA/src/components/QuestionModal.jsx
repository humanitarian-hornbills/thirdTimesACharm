import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
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

const QuestionModal = ({ showModal, setShowModal }) => {
  const showMdoal = 5;
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
            <input type="text" placeholder="Example: jackson11!" />
            <br />
            <small>
              For privacy reasons, do not use your full name or email addresss.
            </small>
          </p>
          <p>
            Your email*:
            {' '}
            <input type="text" placeholder="Why did you like this product or not?" />
            <br />
            <small>
              For authentication reasons, you will not be emailed.
            </small>
          </p>
          <p>
            <br />
            <QuestionInput type="text" placeholder="Your question here" />
          </p>
          <br />
          <button type="button">Submit</button>
        </ModalContent>
        <CloseModalBtn onClick={() => setShowModal((prev) => !prev)} />
      </ModalWrapper>
    </Background>
  );
};

export default QuestionModal;
