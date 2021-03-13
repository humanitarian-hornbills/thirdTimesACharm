import React from 'react';
import PropTypes from 'prop-types';
import BreakdownItem from './BreakdownItem.jsx';

const Breakdown = ({
  ratings, selectStars, addStar, sendClickData,
}) => {
  const sortedArr = [];
  let reviewCount = 0;
  const nums = [1, 2, 3, 4, 5];
  nums.forEach((num) => {
    let entry;
    if (ratings[num]) {
      reviewCount += Number(ratings[num]);
      entry = [num, Number(ratings[num])];
    } else {
      entry = [num, 0];
    }
    sortedArr[Math.abs(num - 5)] = entry;
  });
  return (
    <div>
      {sortedArr.map((pair) => (
        <BreakdownItem
          reviewCount={reviewCount}
          addStar={addStar}
          selectStars={selectStars}
          pair={pair}
          key={pair[0]}
          sendClickData={sendClickData}
        />
      ))}
    </div>
  );
};

Breakdown.propTypes = {
  selectStars: PropTypes.func.isRequired,
  addStar: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
};

Breakdown.defaultProps = {
  ratings: PropTypes.shape({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  }),
};

export default Breakdown;
