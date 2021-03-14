import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
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
import NewReviewTop from './NewReviewTop.jsx';
import CoolButton from '../CoolButton.jsx';

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
    const { characteristics } = this.state;
    const updateChar = characteristics;
    const key = arr[0];
    const val = arr[1];
    updateChar[key] = val;

    this.setState({
      characteristics: updateChar,
    });
  }

  showAddPhotoModal() {
    const { addPhotos } = this.state;
    this.setState({
      addPhotos: !addPhotos,
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

  close() {
    const closeBtn = document.getElementById('modal-btn')
    closeBtn.click();
  }

  submitReview() {
    const { sendNewReview, sendClickData } = this.props;
    if (this.validate()) {
      const newReview = this.state;
      delete newReview.addPhotos;
      delete newReview.errors;
      delete newReview.rModalPhoto;
      sendNewReview(newReview);
      sendClickData('new review submitted');
      this.clearState();
      this.close();
    } else {
      sendClickData('new review not sent - missing data');
    }
  }

  rModalPhoto(src) {
    const { sendClickData } = this.props;
    const modal = document.getElementById('pModal');
    this.setState({
      rModalPhoto: src,
    });
    modal.style.display = 'block';
    window.onclick = (event) => {
      if (event.target === modal) {
        sendClickData('close new review photo modal by clicking outside of modal');
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
    if (input.recommend === null) {
      isValid = false;
      errors.recommend = 'Please make sure you mark if you recommend this product';
    }
    const { factors } = this.props;
    if (Object.keys(input.characteristics).length < factors.length) {
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
    const {
      sendClickData, prodUrl, name, factors,
    } = this.props;
    const {
      photos, errors, addPhotos, rModalPhoto,
    } = this.state;
    const allPhotos = photos;
    return (
      <div>
        <section id="addReviewModal" className="modal-main">
          <div id="scrollBarDiv">
            <div id="allNewReviewForms">
              <NewReviewTop prodUrl={prodUrl} name={name} />
              <div id="newReviewRateRec">
                <Rating
                  sendClickData={sendClickData}
                  error={errors.rating}
                  updateState={this.updateState}
                />
                <Recommend
                  sendClickData={sendClickData}
                  error={errors.recommend}
                  updateState={this.updateState}
                />
              </div>
              <Characteristics
                sendClickData={sendClickData}
                factors={factors}
                updateCharacteristics={this.updateCharacteristics}
              />
              <div className="text-danger">{errors.characteristics}</div>
              <div className="reviewDivider" />
              <h3 className="rSectionTitle">YOUR REVIEW</h3>
              <div id="newReviewText">
                <ReviewSummary
                  sendClickData={sendClickData}
                  error={errors.summary}
                  updateState={this.updateState}
                />
                <ReviewBody
                  sendClickData={sendClickData}
                  error={errors.body}
                  updateState={this.updateState}
                />
              </div>
              <div id="addPhotoBtn">
                {allPhotos.length < 5
                  ? (
                    <CoolButton sendClickData={sendClickData} func={this.showAddPhotoModal} name="ADD PHOTO(S)" text="add photo to new review" />
                  )
                  : <></>}
                <AddPhoto
                  sendClickData={sendClickData}
                  hide={this.showAddPhotoModal}
                  updateState={this.updateState}
                  show={addPhotos}
                />
                {allPhotos.length
                  ? (
                    <>
                      <DisplayPhotos
                        sendClickData={sendClickData}
                        photoModal={this.rModalPhoto}
                        photos={allPhotos}
                      />
                      <PhotoModal src={rModalPhoto} />
                    </>
                  )
                  : null}
              </div>
              <div className="reviewDivider" />
              <h3 className="rSectionTitle">PERSONAL INFO</h3>
              <div id="rPerInfo">
                <Nickname
                  sendClickData={sendClickData}
                  error={errors.name}
                  updateState={this.updateState}
                />
                <Email
                  sendClickData={sendClickData}
                  error={errors.email}
                  updateState={this.updateState}
                />
              </div>
              <div id="newReviewSubmit">
                <CoolButton func={this.submitReview} name="SUBMIT" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

NewReview.propTypes = {
  sendClickData: PropTypes.func.isRequired,
  prodUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  factors: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ),
  ).isRequired,
  sendNewReview: PropTypes.func.isRequired,
};

NewReview.defaultProps = {
  prodUrl: '',
};

export default NewReview;
