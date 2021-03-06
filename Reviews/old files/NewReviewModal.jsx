import React from 'react';
import NewReview from './NewReview/NewReview.jsx';

const NewReviewModal = ({name, factors}) => (
  <div id="rModal" className="pmodal">
    <div className="modal-content" style={{ width: 600 }}>
      <span className="rclose">&times;</span>
      <NewReview
        name={props.name}
        factors={props.factors}
        close={props.close}
        show={props.show}
        sendNewReview={props.sendNewReview}
        photoModal={props.photoModal}
      />
    </div>
  </div>
);

export default NewReviewModal;
