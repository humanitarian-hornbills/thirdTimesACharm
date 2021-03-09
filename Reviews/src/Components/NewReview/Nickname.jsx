import React from 'react';
import PropTypes from 'prop-types';

const Nickname = ({ updateState, error }) => (
  <div id="rName">
    <p>Nickname: <sup class="redA">*</sup></p>
    <input
      maxLength="60"
      type="text"
      onChange={(e) => {
        updateState({ name: e.target.value });
      }}
    />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

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
