import React from 'react';
import PropTypes from 'prop-types';

const Recommend = ({ updateState, error, sendClickData }) => {
  const onChangeValue = (event) => {
    // let rec = true;
    // if (event.target.value === '0') {
    //   rec = false;
    // }
    const ratingObj = { recommend: event.target.value };
    sendClickData(`new review recommend set to ${event.target.value}`);
    updateState(ratingObj);
  };

  return (
    <div id="rRec">
      WOULD YOU RECOMMEND THIS PRODUCT?
      {' '}
      <sup className="redA">*</sup>
      <div id="recRadios" onChange={(e) => { onChangeValue(e); }}>
        <div id="yes">
          <input type="radio" value="true" name="recommend" />
          <span>
            {' '}
            Yes
          </span>
        </div>
        <div id="no">
          <input type="radio" value="false" name="recommend" />
          <span>
            {' '}
            No
          </span>
        </div>
      </div>
      <div className="text-danger">{error}</div>
    </div>
  );
};

export default Recommend;
