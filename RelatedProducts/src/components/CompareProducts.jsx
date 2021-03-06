import React from 'react';

const CompareProducts = ({ compareProduct, currentProduct }) => (
  <div id="compare-modal" className="compare-modal">
    <div id="modal-content" className="modal-content">
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
