import React from 'react';
import PropTypes from 'prop-types';
// import css from './NewReview.css';
import Rating from './Rating.jsx';
import Recommend from './Recommend.jsx';
import Characteristics from './Characteristics.jsx';
import ReviewSummary from './ReviewSummary.jsx'
import ReviewBody from './ReviewBody.jsx'
import AddPhoto from './AddPhoto.jsx'
import Nickname from './Nickname.jsx'
import Email from './Email.jsx'
import DisplayPhotos from './DisplayPhotos.jsx'

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      addPhotos: false,
    };

    this.updateState = this.updateState.bind(this);
    this.updateCharacteristics = this.updateCharacteristics.bind(this);
    this.showModal = this.showModal.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.checkState = this.checkState.bind(this);
  }
  // this.props.factors for fit, width, etc

  updateState(obj) {
    this.setState(obj);
  }

  updateCharacteristics(arr) {
    const updateChar = this.state.characteristics;
    const key = arr[0];
    const val = arr[1];
    updateChar[key] = val;

    this.setState({
      characteristics: updateChar,
    });
  }

  checkState() {
    const currState = this.state;
    let okToSubmit = true;
    if (
      !currState.rating
      || currState.body.length < 50
      || !currState.summary
      || currState.recommend === null
      || !currState.name
      || currState.email.indexOf('@') === -1
      || currState.email.indexOf('.') === -1
      || Object.keys(currState.characteristics).length !== this.props.factors.length
    ) {
      okToSubmit = false;
    }

    return okToSubmit;
  }

  showModal() {
    this.setState({
      addPhotos: !this.state.addPhotos
    });
  }

  submitReview() {
    if (!this.checkState()) {
      alert('please make sure all forms are filled out');
    } else {
      const newReview = this.state;
      delete newReview.addPhotos;
      this.props.sendNewReview(newReview);
      this.props.close();
    }
  }

  render() {
    console.log(this.state);
    // console.log(this.state);
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    const allPhotos = this.state.photos;

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h2>Write Your Review</h2>
          <p>About the {this.props.name}</p>
          <Rating updateState={this.updateState} />
          <Recommend updateState={this.updateState} />
          <Characteristics
            factors={this.props.factors}
            updateCharacteristics={this.updateCharacteristics}
          />
          <ReviewSummary updateState={this.updateState} />
          <ReviewBody updateState={this.updateState} />
          {allPhotos.length < 5
            ? (
              <button
                type="button"
                onClick={() => { this.showModal(); }}
              >
                Add Photo
              </button>
            )
            : null}
          <AddPhoto
            hide={this.showModal}
            updateState={this.updateState}
            show={this.state.addPhotos}
          />
          {allPhotos.length
            ? <DisplayPhotos photos={allPhotos} />
            : null}
          <Nickname updateState={this.updateState} />
          <Email updateState={this.updateState} />
          <button type="button" onClick={() => { this.submitReview(); }}>Submit</button>
          <button type="button" onClick={() => { this.props.close(); }}>Cancel</button>
        </section>
      </div>
    );
  }
}

export default NewReview;


// render() {
//   const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         hello!
//         <Rating updateState={this.updateState} />
//       </section>
//     </div>
//   );
// }
// }


// render() {
//   const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         <form>
//           <label>
//             Overall
//             <input
//               name="overall"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Number of guests:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>
//       </section>
//     </div>
//   );
// }
// }