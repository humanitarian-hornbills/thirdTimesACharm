import React, { useState } from 'react';
import AnswersList from './AnswersList.jsx';

const Question = ({
  question, answersQ, findInQ, search,
}) => {
  const [foundInQ, setFoundInQ] = useState(findInQ);
  // let readableDate = new Date(question.question_date);
  // const options = {
  //   year: 'numeric', month: 'long', day: 'numeric',
  // };
  // readableDate = readableDate.toLocaleDateString('en-US', options);

  if (search.length >= 3 && question.question_body.toLowerCase().includes(search)) {
    if (!foundInQ) {
      setFoundInQ(true);
    }
  }

  return (
    <div>
      <div>
        <h2>
          Q:
          {' '}
          {question.question_body}
        </h2>
      </div>
      <div>
        <p>
          Helpful? Yes (
          {question.question_helpfulness}
          ) | Add Answer
        </p>
      </div>
      <div>
        <div>
          <h2>A:</h2>
        </div>
        <div>
          <AnswersList answersQ={answersQ} search={search} foundInQ={foundInQ} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Question;
