import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { ShoppingBag } from '@styled-icons/boxicons-regular';

export const Logo = styled.h1`
margin-top:5%;
letter-spacing:0.0rem;
font:2.5rem/1 Avenir Book,sans-serif;
font-weight:bold;
color:#f23645;
`;
export const Input = styled.div`
border:1px solid black;
margin-top:25%;
height:20%;
padding:5px;
border: 1px solid #DFDFDF;
color:#4b5666;
letter-spacing:.06rem;
font: 1rem/normal Avenir Book,sans-serif;
text-align: left;

`;

export const SearchIcon = styled(Search)`
color:#167a92;
height:25px;
margin:0 5px;
`;
export const AddBag = styled(ShoppingBag)`
height:40px;
margin-bottom: 4px;
margin-top:22%;
margin-left:20px;
color:#167a92;
`;

export const QuanityTag = styled.div`
display: inline-block;
height:20px;
width:20px;
border-radius:50%;
color:white;
background-color:#167a92;
border:1px solid #167a92;
margin-left:-15px;
text-align:center;
vertical-align: middle;
transition:1s ease;
font:Avenir medium, sans-serif;
`;
