import React from 'react';
import PropTypes from 'prop-types';

const AvgRec = ({ recommended }) => {
  let total = Number(recommended.true) / (Number(recommended.false) + Number(recommended.true));
  // const avgRec
  total = Math.floor(total * 100);
  return (
    <div id="avgRecText">
      {total}
      % of reviews recommended this product
    </div>
  );
};

export default AvgRec;
