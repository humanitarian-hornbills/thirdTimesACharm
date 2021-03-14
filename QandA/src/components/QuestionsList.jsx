import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const QuestionsDiv = styled.div`
  overflow: scroll;
  max-height: 450px;
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
    background: #e71b1b;
    color: white;
    border-color: #e71b1b;
  }
  `;

const QuestionsList = ({
  productData, answers, setAnswers, search, setShowQModal, setShowAnsModal,
  helpfulQ, setHelpfulQ, reportQ, setReportQ, helpfulAnswer, setHelpfulAnswer,
  reportAnswer, setReportAnswer, setTargetQ,
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
                          productId={productData.product_id}
                          question={question}
                          answersQ={answersQ}
                          setAnswers={setAnswers}
                          findInQ={false}
                          search={search}
                          setShowAnsModal={setShowAnsModal}
                          helpfulQ={helpfulQ}
                          setHelpfulQ={setHelpfulQ}
                          reportQ={reportQ}
                          setReportQ={setReportQ}
                          helpfulAnswer={helpfulAnswer}
                          setHelpfulAnswer={setHelpfulAnswer}
                          reportAnswer={reportAnswer}
                          setReportAnswer={setReportAnswer}
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
