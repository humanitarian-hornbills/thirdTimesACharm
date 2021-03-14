/* eslint-disable react/prop-types */
import React from 'react';
import {
  Logo, Input, SearchIcon, Cart, QuanityTag, ShoppingCart, InputSearch,
} from '../../elements/Nav.element.jsx';

const Nav = ({
  quantitySizeSelected,
  getShoppingCartStatus,

}) => (
  <>
    <Logo>ThirdTimesACharm </Logo>
    <Input>
      <SearchIcon />
      <InputSearch placeholder="Search" />
    </Input>
    <ShoppingCart onClick={() => getShoppingCartStatus(true)}>
      <Cart />
      {quantitySizeSelected !== 0 && (
        <QuanityTag>
          {quantitySizeSelected}
        </QuanityTag>
      )}
    </ShoppingCart>
  </>
);

export default Nav;
