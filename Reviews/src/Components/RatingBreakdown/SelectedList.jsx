import React from 'react';
import PropTypes from 'prop-types';

const SelectedList = ({
  selected, selectStars, addStar, sendClickData,
}) => (
  <div>
    <p className="reviewBody">
      Showing reviews:
      {' '}
      {selected.map((star) => (
        <React.Fragment key={star}>
          <span
            role="button"
            tabIndex={0}
            className="link starCountNum"
            onKeyPress={() => {
              selectStars(Number(star)); addStar(Number(star));
              sendClickData(`filter ${star} star reviews`);
            }}
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

SelectedList.propTypes = {
  sendClickData: PropTypes.func.isRequired,
  addStar: PropTypes.func.isRequired,
  selectStars: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
    ]),
  ),
};

SelectedList.defaultProps = {
  selected: [],
};

export default SelectedList;
