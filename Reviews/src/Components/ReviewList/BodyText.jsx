import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BodyText = ({ text }) => {
  const [expand, setExpand] = useState(false);
  const first250 = text.slice(0, 250);
  if (text.length < 250) {
    return (
      <p>{first250}</p>
    );
  }
  return (
    <>
      {!expand
        ? (
          <>
            <p>
              {first250}
              {' '}
              ...
            </p>
            <p className="link" onClick={() => { setExpand(true); }}>Show More</p>
          </>
        )
        : (
          <>
            <p>{text}</p>
          </>
        )}
    </>

  );
};

export default BodyText;
