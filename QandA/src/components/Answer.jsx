import React from 'react';
import Photos from './Photos.jsx';

const Answer = ({ answer }) => {
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
        Helpful? Yes(
        {answer.helpfulness}
        ) | Report
      </p>
    </div>
  );
};

export default Answer;
