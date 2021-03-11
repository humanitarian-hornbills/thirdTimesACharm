import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BodyText = ({ text, sendClickData }) => {
  const [expand, setExpand] = useState(false);
  const first250 = text.slice(0, 250);
  if (text.length < 250) {
    return (
      <div className="reviewBody">
        <p>{first250}</p>
      </div>
    );
  }
  return (
    <div className="reviewBody">
      {!expand
        ? (
          <>
            <p className="reviewBody">
              {first250}
              ...
              {' '}
              <span
                role="button"
                tabIndex="0"
                className="link moreBodyText"
                onClick={() => { setExpand(true); sendClickData('show full review text'); }}
                onKeyPress={() => { setExpand(true); sendClickData('show full review text'); }}
              >
                Show More
              </span>
            </p>
          </>
        )
        : (
          <>
            <p className="reviewBody">{text}</p>
          </>
        )}
    </div>

  );
};

BodyText.propTypes = {
  text: PropTypes.string.isRequired,
  sendClickData: PropTypes.func.isRequired,
};

export default BodyText;
