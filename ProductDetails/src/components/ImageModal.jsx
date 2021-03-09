import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
position:fixed;
left:0;
top:0;
right:0;
bottom:-100%;
background-color: rgba(0,0,0,0.9);
display:flex;
align-items:cener;
justify-content:center;
z-index:2;

`;

const BigImage = styled.div`
width: 60%;
height: 50%;
overflow:hidden;

margin-left:5%;
`;

const Image = styled.img`
 max-width: 100%;
 max-height: 100%;
 border-radius:10px;
`;

const Close = styled.button`
color:#5c5c5f;
margin-left:92%;
width:50px;
height:50px;
margin-top:1%;
margin-bottom:1%;
border-radius:50%;
background-color:#DFDFDF;
border: 1px solid #DFDFDF;
outline:none;
opacity:.4;
&:active{
     transform: translateY(4px);
 };
`;

const ImageModal = ({ curMainImageIndex, styles, getFullScreenClicked }) => {
  const bgMain = styles.map((item, index) => {
    const { url } = item.photos[0];
    return index === curMainImageIndex && (
    <>
      <Close type="submit" onClick={() => getFullScreenClicked(false)}>
        <div>X</div>
      </Close>
      <Image src={url} key={index} alt="styles" />
    </>
    );
  });

  return (
    <Modal>
      <BigImage>
        {bgMain}
      </BigImage>

    </Modal>
  );
};

export default ImageModal;
