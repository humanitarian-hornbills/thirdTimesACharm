/* eslint-disable import/prefer-default-export */
import styled, { css, keyframes } from 'styled-components';
import { HeartFill } from '@styled-icons/bootstrap';

export const SelectedStyled = styled.img`
border-radius: 50%;
margin:auto 10px;
height:65px;
width:65px;
cursor:pointer;
border:3px solid ${(props) => (props.curSelected ? 'black' : '#DFDFDF')}; 
padding:5px;
`;

export const StyleValue = styled.span`
font-weight: 'normal';
padding-left: 10px;
font: 1rem/normal Avenir Book,sans-serif;
letter-spacing:.06rem;
color:#5c5c5f;
`;
export const StyleLegend = styled.h4`
font:1rem/normal Avenir Medium,sans-seri;
letter-spacing:0.06rem;
color:#26262c;
`;
export const QuantitySize = styled.div`
display:flex;
flex-wrap: wrap;
margin-top:7.5%;
`;

const shake = keyframes`
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
export const SizeSelect = styled.select`
flex: 3;
margin-right:10px;
cursor: pointer;
border-radius: 2px;
border:1px solid ${(props) => (props.bagClicked && props.checkSizeValue ? 'red' : '#4b5666')}; 
padding:15px 12px;
text-align:start;
letter-spacing:.06rem;
appearance: none;
color:${(props) => props.bagClicked && props.checkSizeValue && 'red'};
&:focus {
  outline: none;
};
${({ bagClicked, checkSizeValue }) => bagClicked && checkSizeValue && css`
animation: ${shake} 1s ease both;
`}
background-color:white;
`;

export const QuanitySelect = styled.select`
flex: 1;
width: 100%;
padding: 15px 12px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
text-align: center;
text-align-last: center;
appearance: none;
background-color:white;
&:focus {
  outline: none;
};
`;

export const AddToBag = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`;

export const Bag = styled.button`
flex: 7;
width: 100%;
margin-right: 10px;
padding: 15px 12px;
border: 1px solid #4b5666;
text-align: center;
line-height: normal;
letter-spacing: .24rem;
cursor: pointer;
background-color:#4b5666;
color: white;
&:focus {
  outline: none;
}
&:hover{
  background-color: white;
  color:#4b5666;
}
&:active{
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;

export const StarButton = styled.button`
flex: 1;
background-color: white;
border: 1px solid #DFDFDF;
outline: none;
cursor: pointer;
&:active{  
  border: 1px solid ${({ sizeQuantitySelected }) => sizeQuantitySelected && 'red'};
  transform: translateY(4px);
}
&:focus::after{
  border: 1px solid red;
}
`;



export const FavStar = styled(HeartFill)`
height: 16px;
color: ${(props) => (props.likeClicked && props.sizeQuantitySelected && 'red')};
${(props) => props.likeClicked && props.sizeQuantitySelected && css`
transform:scale(1.5)
`}
`;

export const ErrorMessage = styled.span`
color:#c33d3d;
border: 1px solid #c33d3d;
margin-top:10px;
padding:6px;
text-align:center;
letter-spacing:0.0.3rem;
font:1rem/2.0 Avenir Book,sans-serif;
`;

