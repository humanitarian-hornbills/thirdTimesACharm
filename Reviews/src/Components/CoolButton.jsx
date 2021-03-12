import React from 'react';

const CoolButton = ({
  func, text, name, sendClickData,
}) => (
  <div
    role="button"
    tabIndex="0"
    className="acontainer"
    onKeyPress={() => {
      { text ? sendClickData(text) : null; }
      func();
    }}
    onClick={() => {
      { text ? sendClickData(text) : null; }
      func();
    }}
  >
    <div className="acenter">
      <button type="button" className="abtn">
        <svg width="200px" height="50px" viewBox="0 0 200 50" className="border">
          <polyline points="199,1 199,49 1,49 1,1 199,1" className="bg-line" />
          <polyline points="199,1 199,69 1,49 1,1 199,1" className="hl-line" />
        </svg>
        <span>{name}</span>
      </button>
    </div>
  </div>
);

export default CoolButton;
