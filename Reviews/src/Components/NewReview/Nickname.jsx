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
    const newName = event.target.value;
    this.setState({ name: newName });
    this.props.updateState({ name: newName });
  }

  handleSubmit(event) {
    this.props.updateState(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <p>Nickname:</p>
        <input maxLength="60" type="text" value={this.state.name} required onChange={this.handleChange} />
        <br />
        <p>Limit 60 characters</p>
        {/*
        </form> */}
      </div>
    );
  }
}

export default Nickname;
