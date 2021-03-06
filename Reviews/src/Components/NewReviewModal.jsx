import React from 'react';
import NewReview from './NewReview/NewReview.jsx';

const NewReviewModal = (props) => (
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


// name={this.state.productName}
//               factors={factors}
//               close={this.showModal}
//               show={this.state.newReview}
//               sendNewReview={this.sendNewReview}
//               photoModal={this.photoModal}