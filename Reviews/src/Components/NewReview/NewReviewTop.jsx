import React from 'react';

const NewReviewTop = (props) => {
  return (
    <div id="newReviewTop">
      <h2 id="newReviewTopTitle">WRITE YOUR REVIEW</h2>
      <div id="newReviewTopData">
      <div id="rProdTitle">
          {props.name.toUpperCase()}
      </div>
      <div id="rProdPhoto">
        <img src={props.prodUrl}></img>
      </div>
      </div>
    </div>
  )
}

export default NewReviewTop;
