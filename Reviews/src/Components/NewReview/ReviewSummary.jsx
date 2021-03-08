import React from 'react';
import PropTypes from 'prop-types';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: 'Example: Best purchase ever!',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ summary: event.target.value });
    this.props.updateState({ summary: event.target.value });
  }

  handleSubmit(event) {
    this.props.updateState(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Review Summary:
          <textarea maxLength="60" value={this.state.summary} onChange={this.handleChange} />
          Limit 60 characters
        </label>
      </form>
    );
  }
}

export default ReviewSummary;
