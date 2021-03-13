import React from 'react';
import PropTypes from 'prop-types';

const Nickname = ({ updateState, error, sendClickData }) => (
  <div id="rName">
    <p className="rTextTitle">
      NICKNAME:
      {' '}
      <sup className="redA">*</sup>
    </p>
    <input
      className="newRevInput"
      maxLength="60"
      type="text"
      placeholder="Example: jack543!"
      onChange={(e) => {
        updateState({ name: e.target.value });
        sendClickData('new review nickname updated');
      }}
    />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

Nickname.propTypes = {
  updateState: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Nickname.defaultProps = {
  error: '',
};

export default Nickname;

// class Nickname extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//     };

//     this.handleChange = this.handleChange.bind(this);

//   }

//   handleChange(event) {
//     const newName = event.target.value;
//     this.setState({ name: newName });
//     this.props.updateState({ name: newName });
//   }

//   render() {
//     return (
//       <div>
//         <p>Nickname:</p>
//         <input maxLength="60" type="text" onChange={this.handleChange} />
//         <br />
//         <p>Limit 60 characters</p>
//       </div>
//     );
//   }
// }
