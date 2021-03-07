import React from 'react';
import PropTypes from 'prop-types';

const AvgRec = ({ recommended }) => {
  let total = Number(recommended.true) / (Number(recommended.false) + Number(recommended.true));
  total = Math.floor(total * 100);
  return (
    <div id="avgRecText">
      {total}
      % of reviewers recommended this product
    </div>
  );
};

export default AvgRec;
