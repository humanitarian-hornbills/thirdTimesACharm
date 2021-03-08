import React from 'react';
import PropTypes from 'prop-types';

const ReviewStars = ({ rating }) => {
  const ratingPercent = (rating / 5) * 75;

  return (
    <>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: ratingPercent }} />
      </div>
    </>
  );
};

export default ReviewStars;
