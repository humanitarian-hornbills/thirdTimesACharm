import React from 'react';
import PropTypes from 'prop-types';
import CoolButton from '../CoolButton.jsx';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendPhotos = this.sendPhotos.bind(this);
  }

  handleChange(event) {
    const { photos } = this.state;
    const { sendClickData } = this.props;
    const photoArr = photos;
    photoArr.push(event.target.value);
    sendClickData('add photo to new review add photo form');
    this.setState({ photos: photoArr });
  }

  sendPhotos() {
    const { updateState, sendClickData, hide } = this.props;
    updateState(this.state);
    sendClickData('submit photos to new review');
    hide();
  }

  render() {
    const { show, hide, sendClickData } = this.props;
    const showHideClassName = show ? 'newPhotoModal display-block' : 'newPhotoModal display-none';
    const photoInputs = [];
    for (let i = 1; i < 6; i += 1) {
      photoInputs.push(
        <div className="newReviewPhotoInput" key={i}>
          <label htmlFor={`p${i}`}>
            Photo
            {' '}
            {i}
            :
            {' '}
            <input className="newRevPhotoInput" id={`p${i}`} name={i - 1} type="text" onChange={this.handleChange} />
          </label>
        </div>,
      );
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-addPhotos">
          <span
            role="button"
            tabIndex="0"
            onKeyPress={() => { hide(); sendClickData('close new review add photo modal'); }}
            onClick={() => { hide(); sendClickData('close new review add photo modal'); }}
            className="pclose"
          >
            <i className="fas fa-times" />
          </span>
          <h3 className="rSectionTitle">ADD PHOTOS</h3>
          <p className="rTextTitle">ENTER THE URLs TO YOUR IMAGES BELOW</p>
          <div id="newReviewPhotoInputs">
            <form>
              {photoInputs}
            </form>
          </div>
          <CoolButton func={this.sendPhotos} name="SUBMIT" />
        </section>
      </div>
    );
  }
}

AddPhoto.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default AddPhoto;
