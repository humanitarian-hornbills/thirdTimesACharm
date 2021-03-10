import styled, { css } from 'styled-components';

export const Modal = styled.div`
position:fixed;
left:0;
top:0;
right:0;
bottom:-100%;
background-color: rgba(0,0,0,1);
display:flex;
align-items:cener;
justify-content:center;
z-index:2;

`;

export const BigImage = styled.div`
position:relative;
max-width: 600px;
height: 600px;
overflow:hidden;
margin-top:5%;
box-shadow: 2px -1px 9px 5px rgba(252,255,240,0.15);
`;

export const Image = styled.img`
 width: 100%;
min-height: 100%;  
border-radius:5px;
object-fit:cover;

&:hover{
    cursor:crosshair;
}
${({ clicked }) => clicked && css`
transform:scale(2.5);

`}
`;

export const Close = styled.button`
color:#5c5c5f;
width:50px;
height:50px;
margin-top:1%;
margin-bottom:1%;
border-radius:50%;
background-color:#DFDFDF;
border: 1px solid #DFDFDF;
outline:none;
opacity:.4;
&:hover{
    background-color: rgba(0,0,0,0.9);
    border: 1px solid rgba(0,0,0,0.9);
    color:white;
}
&:active{
     transform: translateY(4px);
 };
`;
