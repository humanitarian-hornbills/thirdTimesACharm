import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const H2 = styled.h2`
  color: ${(props) => (props.black ? 'black' : '#e71b1b')};
  font-size: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  `;

const QuestionDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  justify-content: space-between;
`;

const AnswerDiv = styled.div`
  display: flex;

  h2 {
    margin-right: 10px;
  }
`;

const Span = styled.span`
  color: #383636;
  font-size: 14px;
  `;

const Button = styled.button`
  border: none;
  background: white;
  color: #383636;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
  `;

const Question = ({
  productId, question, answersQ, setAnswers, findInQ, search, setShowAnsModal,
  helpfulQ, setHelpfulQ, reportQ, setReportQ, helpfulAnswer, setHelpfulAnswer,
  reportAnswer, setReportAnswer, setTargetQ,
}) => {
  const [foundInQ, setFoundInQ] = useState(findInQ);

  const qId = question.question_id;
  const clickedHelpful = helpfulQ.includes(qId);
  const clickedReport = reportQ.includes(qId);

  if (search.length >= 3 && question.question_body.toLowerCase().includes(search)) {
    if (!foundInQ) {
      setFoundInQ(true);
    }
  }

  const handleClickHelpful = () => {
    setHelpfulQ([...helpfulQ, qId]);
    axios.put('/helpfulQ', { qId, productId })
      .then((response) => console.log(response.data))
      .catch((err) => {
        throw err;
      });
  };

  const handleClickReport = () => {
    setReportQ([...reportQ, qId]);
    axios.put('/reportQ', { qId, productId })
      .then((response) => console.log(response.data))
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <QuestionDiv>
        <div>
          <H2 black>
            Q:
            {' '}
            {question.question_body}
          </H2>
        </div>
        <Span>
          Helpful?
          {'  '}
          {!clickedHelpful
            ? <Button onClick={() => handleClickHelpful()}>Yes</Button>
            : <span>Yes</span>}
          {'  '}
          (
          {!clickedHelpful
            ? question.question_helpfulness
            : question.question_helpfulness + 1}
          )
          {'  '}
          |
          {'  '}
          <Button onClick={() => {
            setTargetQ(question);
            setShowAnsModal((prev) => !prev);
          }}
          >
            Add Answer
          </Button>
          {'  '}
          |
          {'  '}
          {!clickedReport
            ? <Button onClick={() => handleClickReport()}>Report Question</Button>
            : <span>Reported</span>}
        </Span>
      </QuestionDiv>
      <AnswerDiv>
        <H2 black>A:</H2>
        <AnswersList
          answersQ={answersQ}
          qId={qId}
          setAnswers={setAnswers}
          search={search}
          foundInQ={foundInQ}
          helpfulAnswer={helpfulAnswer}
          setHelpfulAnswer={setHelpfulAnswer}
          reportAnswer={reportAnswer}
          setReportAnswer={setReportAnswer}
        />
      </AnswerDiv>
      <br />
    </>
  );
};

export default Question;
