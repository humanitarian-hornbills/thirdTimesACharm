import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = (props) => (
  <div>
    <p>Star Filters Applied</p>
    {props.selected.map(star => <p>{star} stars</p>)}
  </div>
);

export default SelectedList;
