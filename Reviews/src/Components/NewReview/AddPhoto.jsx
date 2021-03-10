import React from 'react';
import PropTypes from 'prop-types';
import CoolButton from '../CoolButton.jsx'

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
    const photoArr = this.state.photos;
    photoArr.push(event.target.value);
    this.props.sendClickData('add photo to new review add photo form')
    this.setState({ photos: photoArr });
  }

  sendPhotos() {
    this.props.updateState(this.state);
    this.props.sendClickData('submit photos to new review')
    this.props.hide();
  }

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    const photoInputs = [];
    for (let i = 1; i < 6; i += 1) {
      photoInputs.push(
        <div className="newReviewPhotoInput" key={i}>
          <label htmlFor={`p${i}`} >
            Photo
            {' '}
            {i}
            :
            {' '}
            <input id={`p${i}`} name={i - 1} type="text" onChange={this.handleChange} />
          </label>
        </div>,
      );
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-addPhotos">
          <span onClick={() => { this.props.hide(); this.props.sendClickData('close new review add photo modal') }} className="pclose">&times;</span>
          <h3 className="rSectionTitle">ADD PHOTOS</h3>
          <div>ENTER THE URLs TO YOUR IMAGES BELOW</div>
          <div id="newReviewPhotoInputs">
          <form>
            {photoInputs}
          </form>
          </div>
          <CoolButton func={this.sendPhotos} name={'submit'}/>
        </section>
      </div>
    );
  }
}

export default AddPhoto;
