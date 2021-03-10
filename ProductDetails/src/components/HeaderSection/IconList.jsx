import React from 'react';
import { GiftIcon, PersonIcon, IconWrapper } from '../../elements/IconList.element.jsx';

const IconList = () => (
  <IconWrapper>

    <GiftIcon />
    <span>registry</span>

    <PersonIcon />
    <span>
      Sign in/ Sign up
    </span>

  </IconWrapper>
);

export default IconList;
