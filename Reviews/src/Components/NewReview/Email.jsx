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
      <div>
        {/* <form> */}
        <p>Email:</p>
        <input if="email" maxLength="60" type="email" value={this.state.name} onChange={this.handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        <br />
        Limit 60 characters
        {/* </form> */}
      </div>
    );
  }
}

export default Email;
