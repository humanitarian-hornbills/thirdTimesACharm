/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { QuantitySize, SizeSelect, QuanitySelect } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const StyledQuanityAndSize = ({
  style, selectedStyleId, clicked, getSizeQuantitySelected, getLikeClicked, getClicked, getErrorMessageShowed
}) => {
  const [sizeValue, setSizeValue] = useState('0');
  const [quantityValue, setQuantityValue] = useState(0);

  const { skus } = style;
  const listOfQuantityAndSize = Object.keys(skus);
  const size = listOfQuantityAndSize.map(
    (item, index) => (
      style.style_id === selectedStyleId) && skus[item].quantity !== 0
      && (
        <Size
          key={index}
          size={skus[item].size}
          skusid={item}
        />
      ),
  );
  useEffect(() => {
    for (const key in skus) {
      if (skus[key].size === sizeValue) {
        setQuantityValue(skus[key].quantity);
      }
    }
  }, [sizeValue]);

  let quantity = '';
  if (quantityValue !== 0) {
    const array = [];
    if (quantityValue < 15) {
      for (let i = 1; i < quantityValue; i += 1) {
        array.push(i);
      }
      quantity = array.map((num, index) => (
        <Quantity
          value={num}
          key={index}
        />
      ));
    } else {
      let i = 1;
      while (i < 16) {
        array.push(i);
        i += 1;
      }
      quantity = array.map((num, index) => (
        <Quantity
          value={num}
          key={index}
        />
      ));
    }
  } else {
    quantity = listOfQuantityAndSize.map(
      (item, index) => (
        (style.style_id === selectedStyleId && skus[item].quantity !== 0)
        && (
          <Quantity
            key={index}
            value={skus[item].quantity}
          />
        )
      ),
    );
  }

  const onHandleChange = (e) => {
    setSizeValue(e.target.value);
    getSizeQuantitySelected(Number(e.target.value) !== 0);
    getClicked(false);
    getLikeClicked(false);
    getErrorMessageShowed(false);
  };

  return (
    <>
      {
        style.style_id === selectedStyleId && (
          <QuantitySize>
            <SizeSelect
              name="size"
              onChange={onHandleChange}
              value={sizeValue}
              clicked={clicked}
              sizeValue={sizeValue === '0'}
              required
            >
              {
                clicked && sizeValue === '0' ? <option value="0"> PLEASE SELECT SIZE </option> : <option value="0">  SELECT SIZE</option>
              }
              {size}
            </SizeSelect>
            <QuanitySelect name="quantity" disabled={sizeValue === '0'}>
              {
                (sizeValue === '0') && <option value="0">  - </option>
              }
              {quantity}
            </QuanitySelect>
          </QuantitySize>
        )
      }
    </>
  );
};

export default StyledQuanityAndSize;
