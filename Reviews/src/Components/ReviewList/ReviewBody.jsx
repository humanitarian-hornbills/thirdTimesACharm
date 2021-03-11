import React from 'react';
import PropTypes from 'prop-types';
import ReviewPhotos from './ReviewPhotos.jsx';
import BodyText from './BodyText.jsx';

const ReviewBody = ({ review, photoModal, sendClickData }) => (
  <div>
    <p>
      <b>{review.summary.toUpperCase()}</b>
    </p>
    <BodyText sendClickData={sendClickData} text={review.body} />
    <ReviewPhotos sendClickData={sendClickData} photoModal={photoModal} photos={review.photos} />
    {review.recommend
      ? (
        <>
          <p className="reviewBody">✓ I recommend this product</p>
        </>
      )
      : <></>}
    {review.response
      ? (
        <div className="response reviewBody">
          <p><b>Response From Seller:</b></p>
          <p>{review.response}</p>
        </div>
      )
      : <div />}
  </div>
);

ReviewBody.propTypes = {
  // review: PropTypes.objectOf(),
  summary: PropTypes.string,
  body: PropTypes.string,
  sendClickData: PropTypes.func.isRequired,
  photoModal: PropTypes.func.isRequired,
};

ReviewBody.defaultProps = {
  summary: '',
  body: '',
  // review: {},
};

export default ReviewBody;
