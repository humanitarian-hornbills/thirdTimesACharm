import React from 'react';

const CoolButton = ({ func , text, name, sendClickData}) => (
  <div className="container" onClick={() => {
    {text ? sendClickData(text) : null}
     func(); }}>
  <div class="center">
    <button class="btn">
      <svg width="200px" height="50px" viewBox="0 0 200 50" class="border">
        <polyline points="199,1 199,49 1,49 1,1 199,1" class="bg-line" />
        <polyline points="199,1 199,69 1,49 1,1 199,1" class="hl-line" />
      </svg>
      <span>{name.toUpperCase()}</span>
    </button>
  </div>
</div>
)

export default CoolButton