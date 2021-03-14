import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9
  `;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  * {
    margin-bottom: 10px;
  }
  `;

export const CloseModalBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10px;
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;

  textarea {
    font-family: sans-serif;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  `;

export const Button = styled.button`
  min-width: 30%;
  height: 50px;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 20px;
  font-size: 1.2rem;
  padding: 10px;
  background: white;
  &:hover {
    cursor: pointer;
    background: #e71b1b;
    color: white;
    border-color: #e71b1b;
  }
  `;

export const SmallButton = styled.button`
  padding: 5px;
  background: white;
  &:hover {
    cursor: pointer;
  }
  `;
