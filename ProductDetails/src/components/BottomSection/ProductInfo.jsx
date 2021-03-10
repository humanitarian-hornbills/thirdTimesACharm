/* eslint-disable react/prop-types */
import React from 'react';
import { Slogan, Feature, SloganFeature } from '../../elements/ProductInfo.element.jsx';

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
    <SloganFeature>
      <Slogan>{product.slogan}</Slogan>
      <Feature>
        <ul>
          {feature}
        </ul>
      </Feature>
    </SloganFeature>
  );
};

export default ProductInfo;
