import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({
  answersQ, setAnswers, search, foundInQ, clickedAnsHelpful, setClickedAnsHelpful,
  clickedReport, setClickedReport,
}) => {
  const [moreAns, setMoreAns] = useState(2);
  const [sortedAns, setSortedAns] = useState(answersQ);

  const filterAns = answersQ.filter((answer) => {
    if (search.length < 3 || foundInQ) {
      return true;
    } if (answer.body.toLowerCase().includes(search)) {
      return true;
    }
    return false;
  });

  const seller = [];

  for (let i = 0; i < filterAns.length - 1; i += 1) {
    const currentAns = filterAns[i];
    if (currentAns.answerer_name.toLowerCase() === 'seller') {
      seller.push(currentAns);
      filterAns.splice(i, 1);
      console.log(true);
    }
  }

  const sorted = [...seller, ...filterAns];
  if (JSON.stringify(sortedAns) !== JSON.stringify(sorted)) {
    setSortedAns(sorted);
    setMoreAns(2);
  }

  return (
    <div>
      {sortedAns.map((answer, index) => (index < moreAns
        && (
        <Answer
          key={answer.answer_id}
          answersQ={answersQ}
          answer={answer}
          setAnswers={setAnswers}
          clickedAnsHelpful={clickedAnsHelpful}
          setClickedAnsHelpful={setClickedAnsHelpful}
          clickedReport={clickedReport}
          setClickedReport={setClickedReport}
        />
        )))}
      <>
        {sortedAns.length - moreAns > 0
          && <button type="button" onClick={() => setMoreAns(moreAns + 2)}>LOAD MORE ANSWERS</button>}
      </>
    </div>
  );
};

export default AnswersList;
