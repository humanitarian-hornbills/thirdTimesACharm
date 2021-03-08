import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const ratingObj = { rating: Number(event.target.value) };
    this.props.updateState(ratingObj);
  }

  render() {
    return (
      <>
        Overall Rating
        <form onChange={this.onChangeValue}>
          <div className="rating noborder">
            <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
            <label htmlFor="star1">☆</label>
            <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
            <label htmlFor="star2">☆</label>
            <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
            <label htmlFor="star3">☆</label>
            <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
            <label htmlFor="star4">☆</label>
            <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
            <label htmlFor="star5">☆</label>
          </div>
        </form>
      </>
    );
  }
}

export default Rating;
