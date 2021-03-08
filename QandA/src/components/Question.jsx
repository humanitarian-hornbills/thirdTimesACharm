import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const H2 = styled.h2`
  margin: 0;
  `;

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
        <H2>
          Q:
          {' '}
          {question.question_body}
        </H2>
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
          <H2>A:</H2>
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
