import React from 'react';
import PropTypes from 'prop-types';

const NewReviewTop = ({ name, prodUrl }) => (
  <div id="newReviewTop">
    <h2 id="newReviewTopTitle">WRITE YOUR REVIEW</h2>
    <div id="newReviewTopData">
      <div id="rProdTitle">
        {name.toUpperCase()}
      </div>
      <div id="rProdPhoto">
        <img alt="" src={prodUrl} />
      </div>
    </div>
  </div>
);

NewReviewTop.propTypes = {
  name: PropTypes.string.isRequired,
  prodUrl: PropTypes.string,
};

NewReviewTop.defaultProps = {
  prodUrl: '',
};

export default NewReviewTop;
