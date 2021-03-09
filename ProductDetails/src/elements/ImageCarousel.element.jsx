import styled from 'styled-components';
import {
  ArrowLeftCircle, ArrowRightCircle, ArrowsAngleExpand,
} from '@styled-icons/bootstrap';
import { ArrowIosUpwardOutline, ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline';

export const Slider = styled.div`
  position:relative;
  display:flex;
  height:85vh;
  //margin:10%;
  justify-content:center;
  align-items:center;
  margin-left:10%;
  
`;

export const ImageWrapper = styled.div`
 width: 90%;
 height: 80%;
 overflow:hidden;
 flex:4;
`;

export const Image = styled.img`
 width: 100%;
 min-height: 100%;  
`;

export const ImageUnderline = styled.hr`
position: absolute;
border: 1px solid #DFDFDF;
width:${(props) => (props.top ? '80%' : '100%')};
border-radius: 5px;
top:${(props) => (props.top ? '8%' : '95%')}

`;

export const ThumbnailWrapper = styled.div`
  position:absolute;
  top: ${(props) => (props.hasArrow ? '9%' : '15%')};
  left:-12%;
  margin-right:10px;
  flex:1;




`;
export const Thumbnail = styled.img`
 display: block;
 width:60px;
 height:50px;
 margin-bottom:20px;
 cursor:pointer;
 padding:2px;
 border: 1px solid ${(props) => (props.curImage ? 'black' : ' #DFDFDF')};
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
margin-top: -20%;
z-index:1;

`;

export const DownArrow = styled(ArrowIosDownwardOutline)`
width: 40px;
padding-left: 18%;
margin-top: -20px;
cursor: pointer;
/* color:${(props) => (props.disabled ? '#DFDFDF' : '#5c5c5f')}; */
`;

export const UpArrow = styled(ArrowIosUpwardOutline)`
width: 40px;
padding-left: 18%;
/* color:${(props) => (props.disabled ? '#5c5c5f' : '#DFDFDF')}; */
cursor: pointer;

`;

export const LeftArrow = styled(ArrowLeftCircle)`
position: absolute;
width: 40px;
top: 50%;
left: 10%;
font-size:3rem;

cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
`;

export const RightArrow = styled(ArrowRightCircle)`
position: absolute;
width: 40px;
top: 50%;
right:10%;
font-size: 3rem;
cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
`;

export const FullscreenArrow = styled(ArrowsAngleExpand)`
position: absolute;
width: 20px;
top: 15%;
right: 10%;
font-size: 3rem;
cursor: pointer;
user-select: none;
color:#4b5666;
  &:hover{
  color: white
}
`;
