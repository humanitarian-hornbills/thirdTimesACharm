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

AvgRec.propTypes = {
  recommended: PropTypes.shape({
    true: PropTypes.string,
    false: PropTypes.string,
  }),
};

AvgRec.defaultProps = {
  recommended: PropTypes.shape({
    true: '',
    false: '',
  }),
};

export default AvgRec;
