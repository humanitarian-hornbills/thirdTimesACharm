import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = ({
  selected, selectStars, addStar, sendClickData,
}) => {
  let count = 0;
  return (
    <div>
      <p className="reviewBody">
        Showing reviews:
        {' '}
        {selected.map((star) => (
          <React.Fragment key={count++}>
            <span
              className="link starCountNum"
              onClick={() => {
                selectStars(Number(star)); addStar(Number(star));
                sendClickData(`filter ${star} star reviews`);
              }}
            >
              {star}
              {' '}
              STARS
            </span>
            {' '}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
export default SelectedList;
