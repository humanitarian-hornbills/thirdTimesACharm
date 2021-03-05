import React from 'react';
import PropTypes from 'prop-types';

const AvgRating = ({ ratings }) => {
  let reviewCount = 0;
  let reviewTotal = 0;

  Object.keys(ratings).forEach((key) => {
    reviewCount += Number(ratings[key]);
    reviewTotal += Number(key) * Number(ratings[key]);
  });

  const avgRating = (reviewTotal / reviewCount).toFixed(1);
  const starNum = (avgRating / 5) * 75;

  return (
    <div id="avgRatingBox">
      <div id="avgRatingNum">{avgRating}</div>
      <div id="avgRatingStars">
        <div className="stars-outer">
          <div className="stars-inner" style={{ width: starNum }} />
        </div>
      </div>
    </div>
  );
};

export default AvgRating;
