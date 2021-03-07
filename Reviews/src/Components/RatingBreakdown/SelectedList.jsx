import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = ({selected}) => (
  <div>
    <p>Star Filters Applied</p>
    {selected.map(star => <p>{star} stars</p>)}
  </div>
);

export default SelectedList;
