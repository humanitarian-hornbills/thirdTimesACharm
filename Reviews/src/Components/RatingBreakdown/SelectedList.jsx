import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = ({ selected, selectStars, addStar, sendClickData }) => (
  <div>
    <p className="reviewBody">
      Showing reviews:
      {' '}
      {selected.map((star) => (
        <>
          <span className="link starCountNum" onClick={() => { selectStars(Number(star)); addStar(Number(star));
          sendClickData(`filter ${star} star reviews`)}}>
            {star}
            {' '}
            STARS
          </span>
          {' '}
        </>
      ))}
    </p>
  </div>
);

export default SelectedList;
