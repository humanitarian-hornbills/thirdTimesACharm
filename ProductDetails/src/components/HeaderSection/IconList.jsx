import React from 'react';
import { GiftIcon, PersonIcon, IconWrapper } from '../../elements/IconList.element.jsx';

const IconList = () => (
  <>
    <IconWrapper>
      <GiftIcon />
      <span>Registry</span>
    </IconWrapper>
    <IconWrapper>
      <PersonIcon />
      <span>
        Sign in/ Sign up
      </span>
    </IconWrapper>
  </>
);

export default IconList;
