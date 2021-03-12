import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const H2 = styled.h2`
  margin: 0;
  `;

const Button = styled.button`
  border: none;
  background: white;
  font-size: .95rem;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
  `;

const Question = ({
  question, answersQ, setAnswers, findInQ, search, setShowAnsModal,
  clickedAnsHelpful, setClickedAnsHelpful, clickedReport, setClickedReport,
  setTargetQ,
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
    <>
      <div>
        <div>
          <H2>
            Q:
            {' '}
            {question.question_body}
          </H2>
        </div>
        <div>
          <span>
            Helpful?
            {' '}
            <Button onClick={() => console.log(question.question_helpfulness + 1)}>Yes</Button>
            {' '}
            (
            {question.question_helpfulness}
            ) |
            {' '}
            <Button onClick={() => {
              setTargetQ(question);
              setShowAnsModal((prev) => !prev);
            }}
            >
              Add Answer
            </Button>
          </span>
        </div>
      </div>
      <div>
        <div>
          <H2>A:</H2>
        </div>
        <div>
          <AnswersList
            answersQ={answersQ}
            setAnswers={setAnswers}
            search={search}
            foundInQ={foundInQ}
            clickedAnsHelpful={clickedAnsHelpful}
            setClickedAnsHelpful={setClickedAnsHelpful}
            clickedReport={clickedReport}
            setClickedReport={setClickedReport}
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default Question;
