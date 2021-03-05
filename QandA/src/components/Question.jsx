import React from 'react';
import AnswersList from './AnswersList.jsx';

const Question = ({ question, answersQ }) => {
  let readableDate = new Date(question.question_date);
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };
  readableDate = readableDate.toLocaleDateString('en-US', options);
  console.log(readableDate);

  return (
    <div>
      <div>
        <h1>Q:</h1>
        <h2>{question.question_body}</h2>
      </div>
      <div>
        <h1>A:</h1>
        <AnswersList answersQ={answersQ} />
      </div>
      <div>
        <p>{readableDate}</p>
        <p>
          Helpful? Yes (
          {question.question_helpfulness}
          )
        </p>
      </div>
      <br />
    </div>
  );
};

export default Question;
