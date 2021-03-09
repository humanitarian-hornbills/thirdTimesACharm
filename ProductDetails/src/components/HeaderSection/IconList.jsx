import React from 'react';
import { GiftIcon, PersonIcon } from '../../elements/IconList.element.jsx';

const IconList = () => (
  <>
    <>
      <GiftIcon />
      <span style={{ position: 'inlineBlock' }}>registry</span>
    </>

    <>

      <PersonIcon />
      <span>
        Sign in/ Sign up

      </span>
    </>
  </>
);

export default IconList;
