import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({ reviews, reviewCount, markAsHelpful, reportReview, photoModal}) => {
  const allReviews = reviews;
  const useTheseReviews = allReviews.slice(0, reviewCount);
  return (
    <div id="reviewList">
      {useTheseReviews.map((review, index) => (
        <ReviewListItem
          markAsHelpful={markAsHelpful}
          review={review}
          key={index}
          reportReview={reportReview}
          photoModal={photoModal}
        />
      ))}
    </div>
  );
};

export default ReviewList;
