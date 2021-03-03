import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answersQ }) => {
  return (
    <div>
      {answersQ.length > 0
        ? answersQ.map((answer) => (
          // {/* {console.log(answerId)} */ }
          <Answer key={answer.answer_id} answer={answer} />
        ))
        : <button type="button">Add an answer</button>
      }
    </div>
  );
};

export default AnswersList;
