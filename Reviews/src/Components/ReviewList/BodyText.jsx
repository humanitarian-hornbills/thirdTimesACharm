/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BodyText = ({ text }) => {
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
              {' '}
              ...
            </p>
            <p className="link moreBodyText" onClick={() => { setExpand(true); }}>Show More</p>
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

export default BodyText;
