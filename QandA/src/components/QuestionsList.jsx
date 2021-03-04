import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionsList = ({ questions, questionsId, answers }) => {
  const [moreQ, setMoreQ] = useState(4);

  return (
    <div>
      {/* {console.log(questions[0].question_id)} */}
      {/* {console.log(questions.length - moreQ, questions.length, moreQ)} */}
      {questions.map((question, index) => (index < moreQ
        && (
          <Question
            key={question.question_id}
            question={question}
            answersQ={answers[question.question_id].results}
          />
        )
      ))}
      <div>
        {questions.length - moreQ > 0
          && <button type="button" onClick={() => setMoreQ(questions.length)}>MORE ANSWERED QUESTIONS</button>}
        <button type="button">ADD A QUESTION</button>
      </div>
    </div>
  );
};

export default QuestionsList;
