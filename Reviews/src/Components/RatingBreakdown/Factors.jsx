import React from 'react';
import PropTypes from 'prop-types';
import FactorItem from './FactorItem.jsx';

const Factors = ({ factors }) => {
  const factorOptions = {
    Fit: ['Runs tight', 'Runs long'],
    Size: ['A size too small', 'A size too wide'],
    Comfort: ['Unfomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs Short', 'Runs Long'],
    Width: ['Too narrow', 'Too wide'],
  };
  const factorsToUse = [];

  Object.keys(factors).forEach((key) => {
    factors[key].edges = factorOptions[key];
    factorsToUse.push({ [key]: factors[key] });
  });

  return (
    <div>
      {factorsToUse.map((factor, index) => <FactorItem factor={factor} key={index} />)}
    </div>
  );
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
