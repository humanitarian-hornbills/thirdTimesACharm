import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answersQ }) => {
  const [moreAns, setMoreAns] = useState(2);
  return (
    <div>
      {answersQ.map((answer, index) => (index < moreAns
        // {/* {console.log(answerId)} */ }
        && <Answer key={answer.answer_id} answer={answer} />
      ))}
      <div>
        {answersQ.length - moreAns > 0
        && <button type="button" onClick={() => setMoreAns(moreAns + 2)}>LOAD MORE ANSWERS</button>}
        <br />
        <a href="jflda">Add Answer</a>
      </div>
    </div>
  );
};

export default AnswersList;
