import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
    this.props.updateState({ email: event.target.value });
  }

  handleSubmit(event) {
    this.props.updateState(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input maxLength="60" type="email" value={this.state.name} onChange={this.handleChange} />
          Limit 60 characters
        </label>
      </form>
    );
  }
}

export default Email;
