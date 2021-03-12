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
        <p id="underStarsCount">
          <b>{reviewCount}</b>
          {' '}
          reviews
        </p>
      </div>
    </div>
  );
};

AvgRating.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
};

AvgRating.defaultProps = {
  ratings: PropTypes.shape({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  }),
};

export default AvgRating;
