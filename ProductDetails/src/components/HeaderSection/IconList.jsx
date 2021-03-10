import React from 'react';
import { GiftIcon, PersonIcon, IconWrapper } from '../../elements/IconList.element.jsx';

const IconList = () => (
  <>
    <IconWrapper>
      <GiftIcon />
      <span>registry</span>
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
