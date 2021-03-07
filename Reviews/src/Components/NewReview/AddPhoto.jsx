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
    photoArr[event.target.name] = event.target.value;
    this.setState({ photos: photoArr });
  }

  sendPhotos() {
    this.props.updateState(this.state);
    this.props.hide();
  }

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    const photoInputs = [];
    for (var i = 1; i < 6; i += 1) {
      photoInputs.push(
        <label htmlFor={`p${i}`}>
          Photo {i}:
          <input id={`p${i}`} name={i - 1} type="text" onChange={this.handleChange} />
        </label>)
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <span onClick={() => { this.props.hide(); }} className="pclose">&times;</span>
          Please enter URLs to your photos below
          <form>
            {/* {photoInputs} */}
            <label htmlFor="p1">
              Photo 1:
              <input
                id="p1"
                name="0"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="p2">
              Photo 2:
              <input
                id="p2"
                name="1"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="p3">
              Photo 3:
              <input
                id="p3"
                name="2"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="p4">
              Photo 4:
              <input
                id="p4"
                name="3"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="p5">
              Photo 5:
              <input
                id="p5"
                name="4"
                type="text"
                onChange={this.handleChange}
              />
            </label>
          </form>
          <button type="button" onClick={this.sendPhotos}>Submit</button>
        </section>
      </div>
    );
  }
}

export default AddPhoto;
