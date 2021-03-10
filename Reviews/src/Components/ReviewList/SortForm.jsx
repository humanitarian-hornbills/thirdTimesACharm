import React from 'react';
import PropTypes from 'prop-types';

const SortForm = ({ getSort, reviewCount, sendClickData }) => (
  <div id="sortBox">
    <span>
      {reviewCount}
      &nbsp;Reviews, sorted by&nbsp;
    </span>
    <span>
      <select id="sortForm" onChange={(e) => {getSort(e.target.value); sendClickData(`sort reviews as ${e.target.value}`) }}>
        <option value="relevant">Relevance</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </span>
  </div>
);

export default SortForm;
