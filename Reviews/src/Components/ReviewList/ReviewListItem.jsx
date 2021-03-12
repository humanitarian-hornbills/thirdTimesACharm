import React from 'react';
import PropTypes from 'prop-types';
import ReviewTop from './ReviewTop.jsx'
import ReviewBody from './ReviewBody.jsx'
import ReviewHelpful from './ReviewHelpful.jsx'

const ReviewListItem = ({ photoModal, review, markAsHelpful, reportReview, sendClickData }) => (
  <div className="reviewListItem">
    <ReviewTop review={review} />
    <ReviewBody review={review} photoModal={photoModal} sendClickData={sendClickData} />
    <ReviewHelpful
      sendClickData={sendClickData}
      reportReview={reportReview}
      markAsHelpful={markAsHelpful}
      review={review}
    />
  </div>
);

ReviewListItem.propTypes = {
  photoModal: PropTypes.func.isRequired,
  markAsHelpful: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  review: PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.url,
      }),
    ),
  }),
};

ReviewListItem.defaultProps = {
  review: {},
};

export default ReviewListItem;

// "review_id": 147678,
//             "rating": 5,
//             "summary": "Id itaque est placeat soluta sit soluta perspiciatis.",
//             "recommend": true,
//             "response": null,
//             "body": "Molestiae laborum accusamus natus necessitatibus cum de",
//             "date": "2020-08-05T00:00:00.000Z",
//             "reviewer_name": "Maggie6",
//             "helpfulness": 26,
//             "photos": [
//                 {
//                     "id": 187149,
//                     "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
//                 }
//             ]
//         },
