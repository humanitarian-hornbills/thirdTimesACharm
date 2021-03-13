import React from 'react';
import PropTypes from 'prop-types';

class CharItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: null,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const {
      charId, options, updateCharacteristics, sendClickData, name,
    } = this.props;
    const charArr = [charId, Number(event.target.value)];
    this.setState({
      checked: options[event.target.value],
    });
    updateCharacteristics(charArr);
    sendClickData(`selected ${options[event.target.value]} for ${name} characteristic`);
  }

  render() {
    const { name, options } = this.props;
    const { checked } = this.state;

    return (
      <div className="charItem">
        <p>
          {name.toUpperCase()}
          {' '}
          <sup className="redA">*</sup>
        </p>
        <div className="checkCharVal">{checked}</div>
        <section className="radioRow" onChange={this.onChangeValue}>
          {Object.keys(options).map((key) => (
            <div key={`${key}name`}>
              <input className="charRadios" type="radio" value={key} name={name} />
            </div>
          ))}
        </section>

        <div className="factorItemFactors">
          <div className="smallFactor">{options[1]}</div>
          {options[3] === 'Perfect' ? <div className="middleFactor">{options[3]}</div> : <div className="middleFactor" />}
          <div className="largeFactor">{options[5]}</div>
        </div>
      </div>
    );
  }
}

CharItem.propTypes = {
  charId: PropTypes.number.isRequired,
  options: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }).isRequired,
  updateCharacteristics: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharItem;
