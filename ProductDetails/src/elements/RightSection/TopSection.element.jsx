import styled from 'styled-components';

export const Reviews = styled.div`
margin-right:1%;

`;

export const Link = styled.a`

  color: #167a92;
  padding:5px;
  font-size:14px;
  transition:10s ease-in;
`;

export const Category = styled.h3`
text-transform: uppercase;
margin:10px 0px;
margin-bottom:0px;
font:1.3rem/normal Avenir Medium,sans-seri;
color:#DFDFDF;
`;

export const Name = styled.h1`
font:2.2rem/1.3 Avenir Medium,sans-seri;
margin-top:1px;
letter-spacing:.12rem;
`;



export const OriginalPrice = styled.h4`
margin: 5px auto;
font:1rem/normal Avenir Medium,sans-seri;
text-decoration: ${(props) => props.checkSale && 'line-through'};
color:${(props) => props.checkSale && ' rgb(128,128,128)'};
&::after{
  ${(props) => props.checkSale && `content:'$${props.salePrice}'`};
  padding-left:10px;
  color: red;
  display: inline-block
}
`;
