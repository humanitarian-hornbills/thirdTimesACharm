import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ updateState, error }) => (
  <div id="rSummary">
    <p class="rTextTitle">REVIEW SUMMARY: <sup class="redA">*</sup></p>
    <textarea maxLength="60" placeholder="Example: Best purchase ever!" onChange={(e) => { updateState({ summary: e.target.value }); }} />
    <br />
    <div className="rUnderText">
    Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

export default ReviewSummary;
