import styled from 'styled-components';

export const Reviews = styled.div`
margin-right:1%;
&::after{
  content:"Read all reviews";
  color: #167a92;
  padding:5px;
  text-decoration:underline;
  font-size:14px;
}
`;

export const Category = styled.h3`
text-transform: uppercase;
margin-top:10px;
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
margin-top: 1px;
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
