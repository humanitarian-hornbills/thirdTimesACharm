import React from 'react';
import PropTypes from 'prop-types';

const BreakdownItem = ({
  pair, selectStars, addStar, reviewCount, sendClickData,
}) => {
  const avg = (Number(pair[1]) / reviewCount) * 225;
  return (
    <div className="breakdownItem">
      <div className="link starCountNum" onClick={() => { selectStars(Number(pair[0])); addStar(Number(pair[0])); sendClickData(`selected ${pair[0]} star ratings`); }} role="presentation">
        {pair[0]}
        &nbsp;STARS
      </div>
      <div className="outerLine">
        <div className="innerLine" style={{ width: avg }} />
      </div>
      &nbsp;
      <div className="starCountTot">{pair[1]}</div>
    </div>
  );
};

// BreakdownItem.propTypes = {
//   selectStars: PropTypes.func.isRequired,
//   addStar: PropTypes.func.isRequired,
//   sendClickData: PropTypes.func.isRequired,
//   pair: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.string,
//     ]),
//   ).isRequired,
//   reviewCount: PropTypes.number.isRequired,
// };

export default BreakdownItem;
