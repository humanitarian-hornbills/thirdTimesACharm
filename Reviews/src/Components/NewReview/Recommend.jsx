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
    <>
      Do you recommend this product?
      <div onChange={(e) => { onChangeValue(e); }}>
        <input type="radio" value="1" name="recommend" />
        {' '}
        Yes
        <input type="radio" value="0" name="recommend" />
        {' '}
        No
      </div>
    </>
  );
};

export default Recommend;
