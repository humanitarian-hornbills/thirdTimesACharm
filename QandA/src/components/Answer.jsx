import React from 'react';
import Photos from './Photos.jsx';

const Answer = ({ answer }) => {
  const readableDate = new Date(answer.date);
  const month = readableDate.getUTCMonth();
  // difference between .getUTCDate and .getDate?
  const day = readableDate.getDate();
  const year = readableDate.getUTCFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
        {months[month]}
        {' '}
        {day}
        ,
        {' '}
        {year}
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
