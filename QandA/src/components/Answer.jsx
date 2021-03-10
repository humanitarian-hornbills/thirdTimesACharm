import React, { useState } from 'react';
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
  answersQ, answer, setAnswers, clickedAnsHelpful, setClickedAnsHelpful,
  clickedReport, setClickedReport,
}) => {
  let readableDate = new Date(answer.date);
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };
  readableDate = readableDate.toLocaleDateString('en-US', options);

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
        {' '}
        <Button onClick={() => console.log('Helpfulness clicked')}>
          Yes
        </Button>
        (
        {answer.helpfulness}
        ) |
        {' '}
        <Button onClick={() => alert('Report functionality is currently in beta development')}>
          Report
        </Button>
        {/* {console.log(clickedAnsHelpful, clickedReport)} */}
      </p>
    </div>
  );
};

export default Answer;
