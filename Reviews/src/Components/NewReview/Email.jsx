import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ updateState, error, sendClickData }) => (
  <div id="rEmail">
    <p>
      EMAIL:
      <sup className="redA">*</sup>
    </p>
    <input maxLength="60" type="email" onChange={(e) => { updateState({ email: e.target.value }); sendClickData('new review email address updated'); }} />
    <br />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

export default Email;
