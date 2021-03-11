/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';



export const SloganFeature = styled.div`
display: flex;
flex-direction: row; 
justify-content: space-around;
margin-left:30px;

`;

export const Slogan = styled.h4`
margin-right:50px;
font:1.3rem/1.3 Avenir medium, sans-serif;
letter-spacing:.06rem;
color: #26262c;
&:hover{
    color:#167a92;
}
`;

export const Feature = styled.div`
margin:2px 50px;
font:1rem/1.3 Avenir medium, sans-serif;
letter-spacing:.06rem;
color: #26262c;
`;
