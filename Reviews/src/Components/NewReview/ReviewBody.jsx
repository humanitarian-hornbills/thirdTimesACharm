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
    this.setState({ body: event.target.value });
    this.props.updateState({ body: event.target.value });
    this.props.sendClickData('new review body updated');
  }

  render() {
    return (
      <div id="rBody">
        <p className="rTextTitle">
          YOUR REVIEW:
          <sup className="redA">*</sup>
        </p>
        <textarea maxLength="1000" placeholder="Why did you like the product or not?" onChange={this.handleChange} />
        {this.state.body.length < 50
          ? (
            <div className="rUnderText">
              Minimum required characters left:&nbsp;
              {50 - this.state.body.length}
            </div>

          )
          : (
            <div className="rUnderText">
              Minimum Reached
            </div>
          )}
        <div className="text-danger">{this.props.error}</div>
      </div>
    );
  }
}

export default ReviewBody;
// class ReviewBody extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: 'Why did you like the product or not?',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ body: event.target.value });
//     this.props.updateState({ body: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <p>Review:</p>
//         <textarea maxLength="1000" minLength="50" value={this.state.body} onChange={this.handleChange} />
//         {this.state.body.length < 50
//           ? (
//             <>
//               <br />
//               Minimum required characters left:&nbsp;
//               {50 - this.state.body.length}
//             </>

//           )
//           : (
//             <>
//               <br />
//               Minimum Reached
//             </>
//           )}
//       </div>
//     );
//   }
// }
