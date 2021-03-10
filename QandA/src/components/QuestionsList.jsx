import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const QuestionsDiv = styled.div`
  overflow: scroll;
  max-height: 90%;
  margin: 0;
  margin-top: 20px;
  `;

const Button = styled.button`
  width: auto;
  height: 50px;
  margin-top: 40px;
  margin-left: 0;
  margin-right: 20px;
  font-size: 1.2rem;
  padding: 10px;
  background: white;
  &:hover {
    cursor: pointer;
  }
  `;

const QuestionsList = ({
  productData, answers, setAnswers, search, setShowQModal, setShowAnsModal,
  clickedAnsHelpful, setClickedAnsHelpful, clickedReport, setClickedReport,
  setTargetQ,
}) => {
  let questions;
  if (productData) {
    questions = productData.results;
  }

  let answersQ;

  const [moreQ, setMoreQ] = useState(4);
  const [filtered, setFiltered] = useState(questions);

  const filterQs = questions.filter((question) => {
    if (answers[question.question_id]) {
      answersQ = answers[question.question_id].results;
    }
    if (search.length < 3) {
      return true;
    } if (question.question_body.toLowerCase().includes(search)
      || answersQ.some((answer) => answer.body.toLowerCase().includes(search))) {
      return true;
    }
    return false;
  });

  if (JSON.stringify(filtered) !== JSON.stringify(filterQs)) {
    setFiltered(filterQs);
    setMoreQ(4);
  }

  return (
    <>
      {productData
        ? (
          <>
            {filtered.length > 0
              ? (
                <QuestionsDiv>
                  {filtered.map((question, index) => {
                    if (answers[question.question_id]) {
                      answersQ = answers[question.question_id].results;
                    }
                    return (index < moreQ
                      && (
                        <Question
                          key={question.question_id}
                          question={question}
                          answersQ={answersQ}
                          setAnswers={setAnswers}
                          findInQ={false}
                          search={search}
                          setShowAnsModal={setShowAnsModal}
                          clickedAnsHelpful={clickedAnsHelpful}
                          setClickedAnsHelpful={setClickedAnsHelpful}
                          clickedReport={clickedReport}
                          setClickedReport={setClickedReport}
                          setTargetQ={setTargetQ}
                        />
                      )
                    );
                  })}
                  {console.log(filtered)}
                </QuestionsDiv>
              )
              : <div>There are no such questions for this product...</div>
            }
            <div>
              {(filtered.length - moreQ > 0)
                && <Button type="button" onClick={() => setMoreQ(filtered.length)}>MORE ANSWERED QUESTIONS</Button>}
              <Button type="button" onClick={() => setShowQModal((prev) => !prev)}>ADD A QUESTION +</Button>
            </div>
          </>
        )
        : <div>This product does not exist. </div>}
    </>
  );
};

export default QuestionsList;
