import React from 'react';
import {
  Logo, Input, SearchIcon, Cart, QuanityTag, ShoppingCart
} from '../../elements/Nav.element.jsx';

const Nav = ({ quantitySizeSelected, getShoppingCartStatus }) => (
  <>
    <Logo>humanitarian-hornbills</Logo>
    <Input>
      <SearchIcon />
      Search
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
