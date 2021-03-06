import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answersQ, search, foundInQ }) => {
  // const [filteredAns, setFilteredAns] = useState(answersQ);
  const [moreAns, setMoreAns] = useState(2);
  const [sortedAns, setSortedAns] = useState(answersQ);
  // const [filtered, setFiltered] = useState(answersQ.length);

  const filterAns = answersQ.filter((answer) => {
    if (search.length < 3 || foundInQ) {
      return true;
    } if (answer.body.toLowerCase().includes(search)) {
      return true;
    }
    return false;
  });

  const sorted = [];
  for (let i = filterAns.length - 1; i >= 0; i -= 1) {
    const currentAns = filterAns[i];
    if (currentAns.answerer_name.toLowerCase() === 'seller') {
      sorted.unshift(currentAns);
    } else {
      sorted.push(currentAns);
    }
  }

  if (JSON.stringify(sortedAns) !== JSON.stringify(sorted)) {
    setSortedAns(sorted);
    setMoreAns(2);
  }

  return (
    <div>
      {sortedAns.map((answer, index) => (index < moreAns
        && <Answer key={answer.answer_id} answer={answer} />))}
      <>
        {sortedAns.length - moreAns > 0
          && <button type="button" onClick={() => setMoreAns(moreAns + 2)}>LOAD MORE ANSWERS</button>}
      </>
    </div>
  );
};

export default AnswersList;
