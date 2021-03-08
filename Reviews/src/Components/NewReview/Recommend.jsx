import React from 'react';
import PropTypes from 'prop-types';

const Recommend = ({ updateState }) => {
  const onChangeValue = (event) => {
    let rec = true;
    if (event.target.value === '0') {
      rec = false;
    }
    const ratingObj = { recommend: rec };
    updateState(ratingObj);
  };

  return (
    <div id="rRec">
      WOULD YOU RECOMMEND THIS PRODUCT?
      <div id="recRadios" onChange={(e) => { onChangeValue(e); }}>
        <div id="yes">
          <input type="radio" value="1" name="recommend" />
          <span>
            {' '}
        Yes
        </span>
        </div>
        <div id="no">
          <input type="radio" value="0" name="recommend" />
          <span>
            {' '}
        No
        </span>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
