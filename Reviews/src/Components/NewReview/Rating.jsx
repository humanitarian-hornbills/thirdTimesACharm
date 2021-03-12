import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ updateState, error, sendClickData }) => {
  const allStars = [];
  for (let i = 5; i > 0; i -= 1) {
    allStars.push(
      <React.Fragment key={i}>
        <input id={`star${i}`} name="star" type="radio" value={i} className="radio-btn hide" />
        <label htmlFor={`star${i}`}>☆</label>
      </React.Fragment>,
    );
  }
  return (
    <div id="rRating">
      YOUR OVERALL RATING
      {' '}
      <sup className="redA">*</sup>
      <p>Please Select</p>
      <form onChange={(e) => { updateState({ rating: Number(e.target.value) }); sendClickData(`new review rating set as ${e.target.value}`); }}>
        <div className="rating noborder">
          {allStars}
        </div>
      </form>
      <div className="text-danger">{error}</div>
    </div>
  );
};

export default Rating;
