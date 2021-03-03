import React from 'react';
import Photos from './Photos.jsx';

const Answer = ({ answer }) => (
  <div>
    {/* {console.log(JSON.stringify(answer))} */}
    <p>{answer.body}</p>
    {answer.photos.length > 0
    && <Photos photos={answer.photos} />}
    <p>
      by {answer.answerer_name}, {answer.date}
    </p>
    <p>
      Helpful? Yes({answer.helpfulness}) | Report
    </p>
  </div>
);

export default Answer;
