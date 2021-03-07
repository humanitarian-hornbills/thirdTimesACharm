import React from 'react';
import PropTypes from 'prop-types';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: 'Example: Best purchase ever!',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ summary: event.target.value });
    this.props.updateState({ summary: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Review Summary:</p>
        <textarea maxLength="60" value={this.state.summary} onChange={this.handleChange} />
        <br />
        Limit 60 characters
      </div>
    );
  }
}

export default ReviewSummary;
