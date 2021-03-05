import React from 'react';
import PropTypes from 'prop-types';
import BreakdownItem from './BreakdownItem.jsx'

const Breakdown = ({ ratings, selectStars, addStar }) => {
  const sortedArr = [];
  let reviewCount = 0;
  Object.keys(ratings).forEach(key => {
    reviewCount += Number(ratings[key]);
    const entry = [Number(key), Number(ratings[key])];
    sortedArr[Math.abs(Number(key) - 5)] = entry;
  });
  return (
    <div>
      {sortedArr.map((pair, index) => (
        <BreakdownItem
          reviewCount={reviewCount}
          addStar={addStar}
          selectStars={selectStars}
          pair={pair}
        />
      ))}
    </div>

  );
};

export default Breakdown;
//   "ratings": {
//       "1": "5",
//       "2": "8",
//       "3": "15",
//       "4": "8",
//       "5": "3"
//   },