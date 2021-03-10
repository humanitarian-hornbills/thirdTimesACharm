import styled from 'styled-components';
import {
  ArrowLeftCircle, ArrowRightCircle, ArrowsAngleExpand,
} from '@styled-icons/bootstrap';

export const ImageWrapper = styled.div`
position:relative;
 max-width: 600px;
 height: 500px;
 box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 overflow:hidden;
`;

export const Image = styled.img`
 width: 100%;
 min-height: 100%;  
border-radius:5px;
object-fit:cover;
cursor:pointer;
`;

export const ImageUnderline = styled.hr`
position: absolute;
border: 1px solid #DFDFDF;
width:${(props) => (props.top ? '80%' : '44%')};
border-radius: 5px;
top:${(props) => (props.top ? '4%' : '85%')};
margin-left:${({ image }) => (image ? '13.5%' : '4%')};
`;
export const LeftArrow = styled(ArrowLeftCircle)`
position: absolute;
width: 40px;
top: 50%;

font-size:3rem;

cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
margin-left:1%;
`;

export const RightArrow = styled(ArrowRightCircle)`
position: absolute;
width: 40px;
top: 50%;
font-size: 3rem;
cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
margin-left:${({ modal }) => (modal ? '92%' : '92%')};
`;

export const FullscreenArrow = styled(ArrowsAngleExpand)`
position: absolute;
width: 20px;
font-size:3rem;
cursor: pointer;
user-select:none;
color:#4b5666;
  &:hover{
  color: white
}
margin-left: 90%;
margin-top: 5%;
`;
