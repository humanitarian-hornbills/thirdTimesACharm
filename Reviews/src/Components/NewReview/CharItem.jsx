import React from 'react';
import PropTypes from 'prop-types';

class CharItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const charId = this.props.charId
    let charArr = [charId, Number(event.target.value)];
    this.props.updateCharacteristics(charArr);
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <section onChange={this.onChangeValue}>
          <label >
            {this.props.options[1]}
            <br />
            <input type="radio" value="1" name={this.props.name} />
          </label>
          <label >
            {this.props.options[2]}
            <br />
            <input type="radio" value="2" name={this.props.name} />
          </label>
          <label >
            {this.props.options[3]}
            <br />
            <input type="radio" value="3" name={this.props.name} />
          </label>
          <label >
            {this.props.options[4]}
            <br />
            <input type="radio" value="4" name={this.props.name} />
          </label>
          <label >
            {this.props.options[5]}
            <br />
            <input type="radio" value="5" name={this.props.name} />
          </label>
        </section>
        <br />
        <br />
        <br />

      </div>

    );
  }
};

export default CharItem;

// <label for="val">Label</label>
// <input type="radio" id="val" name="val" value="hello"></input>

  // return (
  //   <div>
  //     {props.name}
  //     {Object.keys(props.options).map((num, index) =>
  //       <>
  //       <label key={index} for="${num}" >{props.options[num]}</label>
  //       <input type="radio" id="${num}" value="${props.options[num]}" ></input>
  //       </>)}
  //   </div>
  // );