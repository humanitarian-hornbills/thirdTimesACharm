import React, { useState } from 'react';
import Input from '../elements/Input.jsx';

const SearchQuestions = ({ searchQA }) => {
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    searchQA(search.toLowerCase());
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search} onChange={(event) => setSearch(event.target.value)} />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default SearchQuestions;
