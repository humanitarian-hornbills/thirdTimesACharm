import React from 'react';

const CompareProducts = ({ compareProduct, currentProduct }) => (
  <div id="compareModal" className="compareModal">
    <div className="modalContent">
      <span id="close">&times;</span>
      <div>Compare Products</div>
      <div className="compare">
        <div>
          {currentProduct.category}
        </div>
        {compareProduct
          && (
            <div>
              {compareProduct.category}
            </div>
          )}
      </div>
    </div>
  </div>
);
export default CompareProducts;
