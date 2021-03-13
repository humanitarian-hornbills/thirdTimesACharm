import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ updateState, error, sendClickData }) => (
  <div id="rEmail">
    <p className="rTextTitle">
      EMAIL:
      {' '}
      <sup className="redA">*</sup>
    </p>
    <input
      placeholder="Example: jack@email.com"
      className="newRevInput"
      maxLength="60"
      type="email"
      onChange={(e) => { updateState({ email: e.target.value }); sendClickData('new review email address updated'); }}
    />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

Email.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Email.defaultProps = {
  error: '',
};

export default Email;
