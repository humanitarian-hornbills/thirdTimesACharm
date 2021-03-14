import React, { useState } from 'react';
import styled from 'styled-components';
import Answer from './Answer.jsx';

const SmallButton = styled.button`
width: auto;
height: auto;
/* margin-top: 40px;
margin-left: 0;
margin-right: 20px; */
padding: 10px;
background: white;
&:hover {
  cursor: pointer;
  background: #e71b1b;
  color: white;
  border-color: #e71b1b;
}
`;

const AnswersList = ({
  answersQ, qId, setAnswers, search, foundInQ, helpfulAnswer, setHelpfulAnswer,
  reportAnswer, setReportAnswer,
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

  for (let i = 0; i < filterAns.length; i += 1) {
    const currentAns = filterAns[i];
    if (currentAns.answerer_name.toLowerCase() === 'seller') {
      seller.push(currentAns);
      filterAns.splice(i, 1);
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
          qId={qId}
          answersQ={answersQ}
          answer={answer}
          setAnswers={setAnswers}
          helpfulAnswer={helpfulAnswer}
          setHelpfulAnswer={setHelpfulAnswer}
          reportAnswer={reportAnswer}
          setReportAnswer={setReportAnswer}
        />
        )))}
      <>
        {sortedAns.length - moreAns > 0
          && <SmallButton type="button" onClick={() => setMoreAns(moreAns + 2)}>LOAD MORE ANSWERS</SmallButton>}
      </>
    </div>
  );
};

export default AnswersList;
