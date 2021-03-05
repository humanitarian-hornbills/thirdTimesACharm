/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars.jsx'

const ReviewTop = ({ review }) => {
  const { rating, date, reviewer_name } = review;
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = newDate.toLocaleDateString(undefined, options);
  const ratingPercent = (rating / 5) * 75;
  return (
    <div>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: ratingPercent }} />
      </div>

      <div className="nameDate">
        {reviewer_name}
        ,&nbsp;
        {formattedDate}
      </div>
    </div>

  );
};

// ReviewTop.propTypes = {
//   rating: PropTypes.number.isRequired,
//   reviewer_name: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

export default ReviewTop;
