import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = ({ selected, selectStars, addStar }) => (
  <div>
    <p className="reviewBody">
      Showing reviews:
      {' '}
      {selected.map((star) => (
        <>
          <span className="link starCountNum" onClick={() => { selectStars(Number(star)); addStar(Number(star)); }}>
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
