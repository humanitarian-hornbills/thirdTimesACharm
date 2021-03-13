import React from 'react';
import PropTypes from 'prop-types';
import FactorItem from './FactorItem.jsx';

const Factors = ({ factors }) => {
  const factorOptions = {
    Fit: ['Runs tight', 'Runs long', 'Perfect'],
    Size: ['A size too small', 'A size too wide', 'Perfect'],
    Comfort: ['Unfomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs Short', 'Runs Long', 'Perfect'],
    Width: ['Too narrow', 'Too wide', 'Perfect'],
  };
  const factorsToUse = [];

  Object.keys(factors).forEach((key) => {
    const factorObj = factors[key];
    factorObj.edges = factorOptions[key];
    factorsToUse.push({ [key]: factorObj });
  });

  return (
    <div>
      {factorsToUse.map((factor) => (
        <FactorItem
          factor={factor}
          key={Object.keys(factor)[0]}
        />
      ))}
    </div>
  );
};

Factors.propTypes = {
  factors: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  }).isRequired,
};

export default Factors;

// "characteristics": {
//       "Fit": {
//           "id": 50013,
//           "value": "2.9354838709677419"
//       },
//       "Length": {
//           "id": 50014,
//           "value": "3.1612903225806452"
//       },
//       "Comfort": {
//           "id": 50015,
//           "value": "3.0967741935483871"
//       },
//       "Quality": {
//           "id": 50016,
//           "value": "3.0967741935483871"
//       }
//   }
