import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const QuestionsDiv = styled.div`
  overflow: scroll;
  height: 95%;
  `;

const Button = styled.button`
  width: auto;
  height: 50px;
  margin: auto 10px;
  margin-left: 0;
  font-size: 1.2rem;
  padding: 10px;
  `;

const QuestionsList = ({
  productData, answers, search,
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
                    findInQ={false}
                    search={search}
                  />
                )
              );
            })}
            <div>
              <div>
                {(filtered.length - moreQ > 0)
                && <Button type="button" onClick={() => setMoreQ(filtered.length)}>MORE ANSWERED QUESTIONS</Button>}
              </div>
              <div>
                <Button type="button">ADD A QUESTION +</Button>
              </div>
            </div>
          </QuestionsDiv>
        )
        : <div>This product does not exist. </div>}
    </>
  );
};

export default QuestionsList;
