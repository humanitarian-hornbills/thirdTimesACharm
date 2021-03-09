/* eslint-disable react/prop-types */
import React from 'react';
import { Slogan, Feature } from '../../elements/ProductInfo.element.jsx';

const ProductInfo = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { features } = product;
  let feature = [];
  if (features) {
    feature = features.map((item, key) => (
      <li key={key}>{item.feature}</li>
    ));
  }

  return (
    <div
      className="slogan_features"
      style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
      }}
    >
      <Slogan>{product.slogan}</Slogan>
      <Feature>
        features
        <ul>
          {feature}
        </ul>
      </Feature>
    </div>
  );
};

export default ProductInfo;
