import React from 'react';
import {
  Logo, Input, SearchIcon, AddBag, QuanityTag,
} from '../../elements/Nav.element.jsx';

const Nav = ({ quantitySizeSelected }) => (
  <>
    <Logo>humanitarian-hornbills</Logo>
    <Input>
      <SearchIcon />
      Search
    </Input>
    <div>
      <AddBag />
      {quantitySizeSelected !== 0 && (
        <QuanityTag>
          {quantitySizeSelected}
        </QuanityTag>
      )}
    </div>
  </>

);

export default Nav;
