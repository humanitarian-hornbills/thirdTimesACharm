import React from 'react';

const CompareProducts = ({ compareProduct, currentProduct, compareStyle, currentStyle }) => {
  // console.log(compareProduct, currentProduct, compareStyle, currentStyle)
  // const currentFeatures = currentProduct
  let productFeatures = []
  if (currentProduct && compareProduct) {
    console.log(currentProduct, compareProduct)
    let compareProductFeatures = {};
    compareProduct.features.forEach((feature) => {
      compareProductFeatures[feature.feature] = feature.value;
    })

    productFeatures = currentProduct.features.map((feature) => {
      if (compareProductFeatures[feature.feature]) {
        return (<div><div>feature.feature</div> <div>compareProductFeatures[feature.feature]</div></div>)
      }
      return (<div><div>{feature.feature}</div><div>Unknown</div></div>)

    })
    console.log(productFeatures)
  }
  return (
    <div id="compare-modal" className="compare-modal">
      <div id="modal-content" className="modal-content">
        <span id="close">&times;</span>
        <div>Compare Products</div>
        <div className="compare">
        {productFeatures}
        </div>
      </div>

    </div>
  )
};
export default CompareProducts;
