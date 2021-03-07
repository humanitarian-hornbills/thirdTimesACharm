import React from 'react';
import PropTypes from 'prop-types';
import ReviewPhotos from './ReviewPhotos.jsx';
import BodyText from './BodyText.jsx';

const ReviewBody = ({ review, photoModal }) => (
  <div>
    <p>
      <b>{review.summary.toUpperCase()}</b>
    </p>
    <BodyText text={review.body} />
    <ReviewPhotos photoModal={photoModal} photos={review.photos} />
    {review.recommend
      ? (
        <>
          <p className="reviewBody">✓ I recommend this product</p>
        </>
      )
      : <></>}
    {review.response
      ? (
        <div clasName="response reviewBody">
          <p><b>Response From Seller:</b></p>
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
