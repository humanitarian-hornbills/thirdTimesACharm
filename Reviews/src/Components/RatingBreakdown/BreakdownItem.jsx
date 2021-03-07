import React from 'react';
import PropTypes from 'prop-types';

const BreakdownItem = ({ pair, selectStars, addStar, reviewCount }) => {
  const avg = (Number(pair[1]) / reviewCount) * 200;
  return (
    <div className="breakdownItem">
      <div className="link starCountNum" onClick={() => { selectStars(Number(pair[0])); addStar(Number(pair[0])); }} role="presentation">
        {pair[0]}
        &nbsp;STARS
      </div>
      <div className="outerLine" style={{ width: 200 }}>
        <div className="innerLine" style={{ width: avg }} />
      </div>
      &nbsp;
      <div class="starCountTot">{pair[1]}</div>
    </div>
  );
};

export default BreakdownItem;
