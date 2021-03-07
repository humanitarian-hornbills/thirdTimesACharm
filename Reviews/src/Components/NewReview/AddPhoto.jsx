import React from 'react';
import PropTypes from 'prop-types';
// import css from './NewReview.css';

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
    this.setState({ photos: photoArr });
  }

  sendPhotos() {
    this.props.updateState(this.state);
    this.props.hide();
  }

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    const photoInputs = [];
    for (let i = 1; i < 6; i += 1) {
      photoInputs.push(
        <label htmlFor={`p${i}`}>
          Photo
          {' '}
          {i}
          :
          <input id={`p${i}`} name={i - 1} type="text" onChange={this.handleChange} />
        </label>,
      );
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-addPhotos" width="400">
          <span onClick={() => { this.props.hide(); }} className="pclose">&times;</span>
          Please enter URLs to your photos below
          <form>
            {photoInputs}
          </form>
          <button type="button" onClick={this.sendPhotos}>Submit</button>
        </section>
      </div>
    );
  }
}

export default AddPhoto;
