import styled from 'styled-components';

import { ArrowIosUpwardOutline, ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline';


export const ThumbnailWrapper = styled.div`
  margin-top: ${(props) => (props.moreThanSeven && '75%')};
`;

export const Thumbnails = styled.div`
overflow-x: auto;
overflow-y: hidden;
overflow: hidden;
`;
export const Thumbnail = styled.img`
 display: block;
 width:60px;
 height:50px;
 margin-bottom:20px;
 cursor:pointer;
 padding:2px;
 border: 1px solid black;
 transition:transform .5s ease;
 &:hover{
  transform: scale(1.5);
 }
`;

export const Underline = styled.hr`
position: absolute;
border: 4px solid #5c5c5f;
border-radius: 15px;
width: 57px;
margin-top: -1.5%;
z-index:-1;

`;

export const DownArrow = styled(ArrowIosDownwardOutline)`
width: 40px;
padding-left: 18%;
margin-top: -20px;
cursor: pointer;
color:#DFDFDF;
`;

export const UpArrow = styled(ArrowIosUpwardOutline)`
width: 40px;
padding-left: 18%;
color:#DFDFDF;
cursor: pointer;

`;



