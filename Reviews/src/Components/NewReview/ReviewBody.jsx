import React from 'react';
import PropTypes from 'prop-types';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'Why did you like the product or not?',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
    this.props.updateState({ body: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Review:</p>
        <textarea required maxLength="1000" minLength="50" value={this.state.body} onChange={this.handleChange} />
        {this.state.body.length < 50
          ? (
            <>
              <br />
              Minimum required characters left:&nbsp;
              {50 - this.state.body.length}
            </>

          )
          : (
            <>
              <br />
              Minimum Reached
            </>
          )}
      </div>
    );
  }
}

export default ReviewBody;

// onfocus="if(this.value == 'Why did you like the product or not?') { this.value = ''; }"
