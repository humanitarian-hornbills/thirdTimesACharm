import React from 'react';
import PropTypes from 'prop-types';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { updateState, sendClickData } = this.props;
    this.setState({ body: event.target.value });
    updateState({ body: event.target.value });
    sendClickData('new review body updated');
  }

  render() {
    const { body } = this.state;
    const { error } = this.props;
    return (
      <div id="rBody">
        <p className="rTextTitle">
          YOUR REVIEW:
          {' '}
          <sup className="redA">*</sup>
        </p>
        <textarea className="newRevInput" maxLength="1000" placeholder="Why did you like the product or not?" onChange={this.handleChange} />
        {body.length < 50
          ? (
            <div className="rUnderText">
              Minimum required characters left:&nbsp;
              {50 - body.length}
            </div>

          )
          : (
            <div className="rUnderText">
              Minimum Reached
            </div>
          )}
        <div className="text-danger">{error}</div>
      </div>
    );
  }
}

ReviewBody.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  error: PropTypes.string,
};

ReviewBody.defaultProps = {
  error: '',
};

export default ReviewBody;
