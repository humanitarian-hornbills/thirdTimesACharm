import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ updateState }) => {
  const allStars = [];
  for (let i = 5; i > 0; i -= 1) {
    allStars.push(
      <>
        <input id={`star${i}`} name="star" type="radio" value={i} className="radio-btn hide" />
        <label htmlFor={`star${i}`}>☆</label>
      </>,
    );
  }
  return (
    <>
      Overall Rating
      <form onChange={(e) => { updateState({ rating: Number(e.target.value) }); }}>
        <div className="rating noborder">
          {allStars}
        </div>
      </form>
    </>
  );
};

export default Rating;
