import React from 'react';
import Question from './Question.jsx';

const QuestionsList = ({ questions, questionsId, answers }) => (
  <div>
    {console.log(questions[0].question_id)}
    {questions.map((question) => (
      (
        <Question
          key={question.question_id}
          question={question}
          answersQ={answers[question.question_id].results}
        />
      )
    ))}
  </div>
);

export default QuestionsList;
