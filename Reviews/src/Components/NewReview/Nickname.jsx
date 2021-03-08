import React from 'react';
import PropTypes from 'prop-types';

class Nickname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
    this.props.updateState({ name: newName });
  }

  handleSubmit(event) {
    this.props.updateState(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nickname:
          <input maxLength="60" type="text" value={this.state.name} onChange={this.handleChange} />
          Limit 60 characters
        </label>
      </form>
    );
  }
}

export default Nickname;
