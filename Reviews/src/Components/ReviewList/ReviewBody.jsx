import React from 'react';
import PropTypes from 'prop-types';
import ReviewPhotos from './ReviewPhotos.jsx';
import BodyText from './BodyText.jsx';

const ReviewBody = ({ review, photoModal, sendClickData }) => (
  <div>
    <p className="reviewBody">
      <b>{review.summary.toUpperCase()}</b>
    </p>
    <BodyText sendClickData={sendClickData} text={review.body} />
    <ReviewPhotos sendClickData={sendClickData} photoModal={photoModal} photos={review.photos} />
    {review.recommend
      ? (
        <>
          <p className="reviewBody iRec">✓ I recommend this product</p>
        </>
      )
      : <></>}
    {review.response
      ? (
        <>
          <div className="response">
            <p><b>Response From Seller:</b></p>
            <p className="reviewBody">{review.response}</p>
          </div>
        </>
      )
      : <div />}
  </div>
);

ReviewBody.propTypes = {
  review: PropTypes.shape({
    summary: PropTypes.string,
    body: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
      }),
    ),
  }),
  summary: PropTypes.string,
  body: PropTypes.string,
  sendClickData: PropTypes.func.isRequired,
  photoModal: PropTypes.func.isRequired,
};

ReviewBody.defaultProps = {
  summary: '',
  body: '',
  review: {},
};

export default ReviewBody;
