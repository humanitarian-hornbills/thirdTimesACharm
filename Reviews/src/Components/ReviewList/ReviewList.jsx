import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';
import FadeInSection from '../FadeInTest.jsx';

const ReviewList = ({
  reviews, reviewCount, markAsHelpful, reportReview, photoModal, sendClickData,
}) => {
  const useTheseReviews = reviews.slice(0, reviewCount);
  const old = useTheseReviews.slice(0, useTheseReviews.length - 2);
  const newRevs = useTheseReviews.slice(useTheseReviews.length - 2);
  const setUpReviews = (arr) => arr.map((review) => (
    <ReviewListItem
      markAsHelpful={markAsHelpful}
      review={review}
      key={review.review_id}
      reportReview={reportReview}
      photoModal={photoModal}
      sendClickData={sendClickData}
    />
  ));
  return (
    <div id="reviewList">

      {setUpReviews(old)}
      <FadeInSection>
        {setUpReviews(newRevs)}

      </FadeInSection>
    </div>
  );
};

ReviewList.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  markAsHelpful: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
  photoModal: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

ReviewList.defaultProps = {
  reviews: {},
};

export default ReviewList;
