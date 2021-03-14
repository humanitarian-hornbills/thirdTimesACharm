import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ updateState, error, sendClickData }) => (
  <div id="rSummary">
    <p className="rTextTitle">
      REVIEW SUMMARY:
      {' '}
      <sup className="redA">*</sup>
    </p>
    <textarea className="newRevInput" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(e) => { updateState({ summary: e.target.value }); sendClickData('new review summary updated'); }} />
    <br />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

ReviewSummary.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  error: PropTypes.string,
};

ReviewSummary.defaultProps = {
  error: '',
};

export default ReviewSummary;
