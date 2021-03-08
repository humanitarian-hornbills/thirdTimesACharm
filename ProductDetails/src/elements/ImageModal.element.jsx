import styled from 'styled-components';

export const Modal = styled.div`
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

export const BigImage = styled.div`
width: 60%;
height: 50%;
overflow:hidden;

margin-left:5%;
`;

export const Image = styled.img`
 max-width: 100%;
 max-height: 100%;
 border-radius:10px;
`;

export const Close = styled.button`
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
