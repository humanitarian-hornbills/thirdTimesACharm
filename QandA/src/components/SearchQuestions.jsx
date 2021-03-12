import React, { useState } from 'react';
import Input from '../elements/Input.jsx';

const SearchQuestions = ({ search, setSearch }) => (
  <div>
    <Input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
  </div>
);

export default SearchQuestions;
