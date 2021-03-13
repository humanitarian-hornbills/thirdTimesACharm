import React from 'react';
import PropTypes from 'prop-types';

const FactorItem = ({ factor }) => {
  const name = Object.keys(factor)[0];
  const { value } = factor[name];
  const small = factor[name].edges[0];
  const large = factor[name].edges[1];
  const middle = factor[name].edges[2];
  const avg = ((value / 5) * 295) - 8.58;

  return (
    <div className="factorItem">
      <p className="factorName">{name}</p>
      <div className="factorData">
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
        {middle ? <div className="middleFactor">{middle}</div> : <div className="middleFactor" />}
        <div className="largeFactor">{large}</div>
      </div>
    </div>
  );
};

FactorItem.propTypes = {
  factor: PropTypes.shape({
    name: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.string,
      ),
    }),
  }).isRequired,
};

export default FactorItem;
