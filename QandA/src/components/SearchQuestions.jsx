import React, { useState } from 'react';

const SearchQuestions = ({ searchQA }) => {
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    searchQA(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {console.log(search)} */}
      <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search} onChange={(event) => setSearch(event.target.value)} />
      <button type="button">Search</button>
    </form>
  );
};

export default SearchQuestions;
