import styled from 'styled-components';

import { Gift } from '@styled-icons/feather/Gift'
import { Person } from '@styled-icons/ionicons-outline/Person'

export const IconWrapper = styled.div`

font:1rem/normal Avenir Book,sans-serif;
letter-spacing:0.03rem;
color:#167a92;
&:hover{
    color:black;
  }
`;


export const GiftIcon = styled(Gift)`
  color:#167a92;
  width:40px;
  height:20px;
  margin-top:-10px;
  &:hover{
    color:black;
  }
`;

export const PersonIcon = styled(Person)`
color:#167a92;
  width:40px;
  height:20px;
  margin-top:-10px;
  &:hover{
    color:black;
  }
`;
