import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionsList = ({
  productData, questionsId, answers, search,
}) => {
  let questions;
  if (productData) {
    questions = productData.results;
  }
  const [moreQ, setMoreQ] = useState(4);
  const [filtered, setFiltered] = useState(questions.length);

  return (
    <>
      {productData
        ? (
          <div>
            {questions.reduce((accumulator, question, index) => {
              let answersQ;
              if (answers[question.question_id]) {
                answersQ = answers[question.question_id].results;
              }
              const questionComponent = () => (index < moreQ
                && (
                  <Question
                    key={question.question_id}
                    question={question}
                    answersQ={answersQ}
                  />
                )
              );
              if (search.length >= 3) {
                if (
                  question.question_body.toLowerCase().includes(search)
                  || answersQ.some((answer) => answer.body.toLowerCase().includes(search))
                ) {
                  accumulator.push(questionComponent());
                }
                if (index === questions.length - 1 && filtered !== accumulator.length) {
                  setFiltered(accumulator.length);
                }
                return accumulator;
              }
              accumulator.push(questionComponent());
              return accumulator;
            }, [])}
            <div>
              {(filtered - moreQ > 0)
                && <button type="button" onClick={() => setMoreQ(filtered)}>MORE ANSWERED QUESTIONS</button>}
              <button type="button">ADD A QUESTION</button>
            </div>
          </div>
        )
        : <div>This product does not exist. </div>}
    </>
  );
};

export default QuestionsList;
