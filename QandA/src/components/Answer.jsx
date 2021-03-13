import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Photos from './Photos.jsx';

const Button = styled.button`
border: none;
background: white;
font-size: .95rem;
&:hover {
  cursor: pointer;
  border-bottom: 1px solid black;
}
`;

const Answer = ({
  qId, answersQ, answer, setAnswers, helpfulAnswer, setHelpfulAnswer,
  reportAnswer, setReportAnswer,
}) => {
  const ansId = answer.answer_id;

  const clickedHelpful = helpfulAnswer.includes(ansId);
  const clickedReport = reportAnswer.includes(ansId);

  let readableDate = new Date(answer.date);
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };
  readableDate = readableDate.toLocaleDateString('en-US', options);

  const handleClickHelpful = () => {
    setHelpfulAnswer([...helpfulAnswer, ansId]);
    axios.put('/helpfulAns', { ansId, qId })
      .then((response) => console.log(response.data))
      .catch((err) => {
        throw err;
      });
  };

  const handleClickReport = () => {
    setReportAnswer([...reportAnswer, ansId]);
    axios.put('/reportAns', { ansId, qId })
      .then((response) => console.log(response.data))
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <p>{answer.body}</p>
      {answer.photos.length > 0
        && <Photos photos={answer.photos} />}
      <p>
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {readableDate}
      </p>
      <p>
        Helpful?
        {'  '}
        {!clickedHelpful
          ? <Button onClick={() => handleClickHelpful()}>Yes</Button>
          : <span>Yes</span>}
        {'  '}
        (
        {!clickedHelpful
          ? answer.helpfulness
          : answer.helpfulness + 1}
        )
        {'  '}
        |
        {'  '}
        {!clickedReport
          ? <Button onClick={() => handleClickReport()}>Report Answer</Button>
          : <span>Reported Answer</span>}
      </p>
    </div>
  );
};

export default Answer;
