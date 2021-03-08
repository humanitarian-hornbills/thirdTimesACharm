import React from 'react';
import PropTypes from 'prop-types';

class SortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.getSort(event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="sortBox">
        <span>
          {this.props.reviewCount}
          &nbsp;Reviews, sorted by&nbsp;
        </span>
        <span id="sortForm">
            <select onChange={this.handleSubmit}>
              <option value="relevant">Relevence</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
        </span>
      </div>
    );
  }
}

export default SortForm;
