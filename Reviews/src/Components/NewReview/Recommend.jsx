import React from 'react';
import PropTypes from 'prop-types';

const Recommend = ({ updateState, error, sendClickData }) => {
  const onChangeValue = (event) => {
    let rec = true;
    if (event.target.value === '0') {
      rec = false;
    }
    const ratingObj = { recommend: rec };
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
          <input className="recRadios" type="radio" value="1" name="recommend" />
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
      <div className="text-danger">{error}</div>
    </div>
  );
};

Recommend.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Recommend.defaultProps = {
  error: '',
};

export default Recommend;
