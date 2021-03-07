import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ updateState }) => (
  <div>
    <p>Review Summary:</p>
    <textarea maxLength="60" defaultValue="Example: Best purchase ever!" onChange={(e) => { updateState({ summary: e.target.value }); }} />
    <br />
    Limit 60 characters
  </div>
);

export default ReviewSummary;
