import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ updateState }) => (
  <div id="rSummary">
    <p class="rTextTitle">Review Summary:</p>
    <textarea maxLength="60" defaultValue="Example: Best purchase ever!" onChange={(e) => { updateState({ summary: e.target.value }); }} />
    <br />
    <div className="rUnderText">
    Limit 60 characters
    </div>
  </div>
);

export default ReviewSummary;
