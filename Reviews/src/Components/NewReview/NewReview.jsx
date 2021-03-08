import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';
import Recommend from './Recommend.jsx';
import Characteristics from './Characteristics.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewBody from './ReviewBody.jsx';
import AddPhoto from './AddPhoto.jsx';
import Nickname from './Nickname.jsx';
import Email from './Email.jsx';
import DisplayPhotos from './DisplayPhotos.jsx';
import PhotoModal from '../PhotoModal.jsx';
import NewReviewTop from './NewReviewTop.jsx'

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
      rModalPhoto: null,
      errors: {},
    };

    this.updateState = this.updateState.bind(this);
    this.updateCharacteristics = this.updateCharacteristics.bind(this);
    this.showAddPhotoModal = this.showAddPhotoModal.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.rModalPhoto = this.rModalPhoto.bind(this);
    this.clearState = this.clearState.bind(this);
    this.validate = this.validate.bind(this);
  }

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

  showAddPhotoModal() {
    this.setState({
      addPhotos: !this.state.addPhotos,
    });
  }

  clearState() {
    this.setState({
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      addPhotos: false,
      rModalPhoto: null,
      errors: {},
    });
  }

  submitReview() {
    if (this.validate()) {
      const newReview = this.state;
      delete newReview.addPhotos;
      this.props.sendNewReview(newReview);
      this.clearState();
      this.props.close();
    }
  }

  rModalPhoto(src) {
    const modal = document.getElementById('pModal');
    const span = document.getElementsByClassName('pclose');
    this.setState({
      rModalPhoto: src,
    });
    modal.style.display = 'block';
    const newSpan = [];
    Object.keys(span).forEach((key) => {
      span[key].onclick = () => {
        modal.style.display = 'none';
      };
      newSpan.push(span[key]);
    });
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  validate() {
    const input = this.state;
    const errors = {};
    let isValid = true;
    if (!input.name) {
      isValid = false;
      errors.name = 'Please enter your name.';
    }
    if (!input.email) {
      isValid = false;
      errors.email = 'Please enter your email Address.';
    }
    if (typeof input.email !== 'undefined') {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input.email)) {
        isValid = false;
        errors.email = 'Please enter valid email address.';
      }
    }
    if (!input.rating) {
      isValid = false;
      errors.rating = 'Please add your overall rating.';
    }
    if (!input.body || input.body.length < 50) {
      isValid = false;
      errors.body = 'Pleae make sure your summary is at least 50 characters long.';
    }
    if (!input.summary) {
      isValid = false;
      errors.summary = 'Please make sure you leave a review summary';
    }
    if (!input.recommend) {
      isValid = false;
      errors.recommend = 'Please make sure you mark if you recommend this product';
    }
    if (Object.keys(input.characteristics).length < this.props.factors.length) {
      isValid = false;
      errors.characteristics = 'Please make sure you fill out every characteristic rating';
    }

    this.setState({
      errors,
    });

    return isValid;
  }

  render() {
    console.log(this.state);
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    const allPhotos = this.state.photos;
    return (
      <div className={showHideClassName}>
        <section id="addReviewModal" className="modal-main">
        <span role="close" onClick={() => { this.props.close(); this.clearState(); }} className="rclose">&times;</span>
          <div id="allNewReviewForms">
          <NewReviewTop prodUrl={this.props.prodUrl} name={this.props.name}/>
          <div id="newReviewRateRec">
            <Rating updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.rating}</div>
            <Recommend updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.recommend}</div>
          </div>
          {/* <div className="reviewDivider" /> */}
          <Characteristics
            factors={this.props.factors}
            updateCharacteristics={this.updateCharacteristics}
          />
          <div className="text-danger">{this.state.errors.characteristics}</div>
          <div className="reviewDivider" />
          <h3 class="rSectionTitle">YOUR REVIEW</h3>
          <div id="newReviewText">
            <ReviewSummary updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.summary}</div>
            <ReviewBody updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.body}</div>
          </div>
          <div>
            {allPhotos.length < 5
              ? (
                <button
                  type="button"
                  onClick={() => { this.showAddPhotoModal(); }}
                >
                  Add Photo
                </button>
              )
              : null}
            <AddPhoto
              hide={this.showAddPhotoModal}
              updateState={this.updateState}
              show={this.state.addPhotos}
            />
            {allPhotos.length
              ? (
                <>
                  <DisplayPhotos photoModal={this.rModalPhoto} photos={allPhotos} />
                  <PhotoModal src={this.state.rModalPhoto} />
                </>
              )
              : null}
          </div>
          <div className="reviewDivider" />
          <h3 class="rSectionTitle">PERSONAL INFO</h3>
          <div id="rPerInfo">
            <Nickname updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.name}</div>
            <Email updateState={this.updateState} />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>
            <button type="button" onClick={() => { this.submitReview(); }}>Submit</button>
          </div>
        </section>
      </div>
    );
  }
}

export default NewReview;
