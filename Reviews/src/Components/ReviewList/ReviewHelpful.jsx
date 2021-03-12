import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({
  review, markAsHelpful, reportReview, sendClickData,
}) => {
  const [hClicked, setHClicked] = useState(false);
  const [rClicked, setRClicked] = useState(false);
  const total = review.helpfulness;
  const nextTotal = total + 1;
  return (
    <div className="reviewHelpful">
      <p>
        Helpful? &nbsp;
        {!hClicked
          ? (
            <>
              <span
                role="button"
                tabIndex="0"
                className="link"
                onKeyPress={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
                onClick={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
              >
                Yes
              </span>
          &nbsp;
              (
              {total}
              )
            </>
          )
          : (
            <>
              <span className="link">Yes</span>
          &nbsp;
              (
              {nextTotal}
              )
            </>
          )}
        &nbsp;&nbsp;|
        &nbsp;&nbsp;
        {!rClicked
          ? (
            <span
              role="button"
              tabIndex="0"
              className="link"
              onKeyPress={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
              onClick={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
            >
              Report
            </span>
          )
          : <span className="link">Report</span>}
      </p>
    </div>
  );
};

ReviewHelpful.propTypes = {
  helpfulness: PropTypes.number,
  markAsHelpful: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  review: PropTypes.shape({
    helpfulness: PropTypes.number,
    review_id: PropTypes.number,
  }),
};

ReviewHelpful.defaultProps = {
  helpfulness: null,
  review: {},
};

export default ReviewHelpful;
