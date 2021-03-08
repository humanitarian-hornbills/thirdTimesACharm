import React from 'react';
import PropTypes from 'prop-types';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    let rec = true;
    if (event.target.value === '0') {
      rec = false;
    }
    let ratingObj = { recommend: rec };
    this.props.updateState(ratingObj);
  }

  render() {
    return (
      <>
        Do you recommend this product?
        <div onChange={this.onChangeValue}>
          <input type="radio" value="1" name="recommend" />
          {' '}
          Yes
          <input type="radio" value="0" name="recommend" />
          {' '}
          No
        </div>
      </>
    );
  }
}

export default Recommend;
