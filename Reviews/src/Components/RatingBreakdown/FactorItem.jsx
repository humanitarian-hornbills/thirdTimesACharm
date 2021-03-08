import React from 'react';
import PropTypes from 'prop-types';

const FactorItem = ({ factor }) => {
  const name = Object.keys(factor)[0];
  const { value } = factor[name];
  const small = factor[name].edges[0];
  const large = factor[name].edges[1];
  const avg = ((value / 5) * 300) - 8.58;
  console.log(value)
  return (
    <div className="factorItem">
      <p>{name}</p>
      <div clasName="factorData">
        <div className="factorLine">
          <div className="breakLine" />
          <div className="breakLine" />
          <div className="breakLine" />
          <div className="breakLine" />
        </div>
        <div className="factorTriangle" style={{ left: avg }} />
      </div>
      <div className="factorItemFactors">
        <div className="smallFactor">{small}</div>
      &nbsp;
        <div className="largeFactor">{large}</div>
      </div>
    </div>
  );
};

export default FactorItem;
