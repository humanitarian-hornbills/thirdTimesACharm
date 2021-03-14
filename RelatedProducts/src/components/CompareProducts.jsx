import React from 'react';

const CompareProducts = ({ compareProduct, currentProduct, compareStyle, currentStyle }) => {
  // console.log(compareProduct, currentProduct, compareStyle, currentStyle)
  // const currentFeatures = currentProduct
  let productFeatures = []
  if (currentProduct && compareProduct) {
    let compareProductFeatures = {};
    compareProduct.features.forEach((feature) => {
      compareProductFeatures[feature.feature] = feature.value;
    })

    productFeatures = currentProduct.features.map((feature) => {
      if (compareProductFeatures[feature.feature]) {
        return (<tr><td>{feature.feature}</td><td>{feature.value}</td> <td>{compareProductFeatures[feature.feature]}</td></tr>)
      }
      return (<tr><td>{feature.feature}</td><td>{feature.value}</td><td>N/A</td></tr>)
    })
  }
  return (
    <div id="compare-modal" className="compare-modal">
      <div id="modal-content" className="modal-content">
        <span id="close">&times;</span>
        <div className="modal-title">Compare Products</div>
        <div className="compare">
          {(currentProduct && compareProduct) &&
            (
              <table>
                <tr>
                  <th></th>
                  <th>{currentProduct.name}</th>
                  <th>{compareProduct.name}</th>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{currentProduct.category}</td>
                  <td>{compareProduct.category}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{currentProduct.default_price}</td>
                  <td>{compareProduct.default_price}</td>
                </tr>
                {productFeatures}
              </table>
            )}



        </div>
      </div>
    </div>
  )
};
export default CompareProducts;
