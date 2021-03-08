import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ review, markAsHelpful, reportReview }) => {
  const [hClicked, setHClicked] = useState(false);
  const [rClicked, setRClicked] = useState(false);
  const total = review.helpfulness;
  const nextTotal = total + 1;
  return (
    <div>
      <p>
        Helpful? &nbsp;
        {!hClicked
          ? (
            <>
              <span className="link" onClick={() => { markAsHelpful(review.review_id); setHClicked(true); }}>Yes</span>
          &nbsp;
              {total}
            </>
          )
          : (
            <>
              <span className="link">Yes</span>
          &nbsp;
              {nextTotal}
            </>
          )}
        &nbsp;&nbsp;|
        &nbsp;&nbsp;
        {!rClicked
          ? <span className="link" onClick={() => { reportReview(review.review_id); setRClicked(true); }}>Report</span>
          : <span className="link">Report</span>}

      </p>
    </div>
  );
};

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number.isRequired,
// };

export default ReviewHelpful;
