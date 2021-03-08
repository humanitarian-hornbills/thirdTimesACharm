import React from 'react';
import PropTypes from 'prop-types';
import ReviewPhotos from './ReviewPhotos.jsx';
import BodyText from './BodyText.jsx';

const ReviewBody = ({ review }) => (
  <div>
    <p>
      <b>{review.summary}</b>
    </p>
    <BodyText text={review.body} />
    <ReviewPhotos photos={review.photos} />
    {review.recommend
      ? (
        <>
          <p>✓ I recommend this product</p>
        </>
      )
      : <></>}
    {review.response
      ? (
        <div clasName="response">
          <p>Response From Seller:</p>
          <p>{review.response}</p>
        </div>
      )
      : <></>}
  </div>
);

ReviewBody.propTypes = {
  review: PropTypes.object,
  summary: PropTypes.string,
  body: PropTypes.string,
};

ReviewBody.defaultProps = {
  summary: '',
  body: '',
  review: {},
};

export default ReviewBody;
