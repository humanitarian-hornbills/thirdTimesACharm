/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Products from '../src/components/Products';
import ThumbnailGallery from '../src/components/leftSection/ThumbnailGallery';
import ProductDetails from '../src/components/RightSection/ProductDetails';
import ProductInfo from '../src/components/BottomSection/ProductInfo';
import IconList from '../src/components/HeaderSection/IconList';

describe('<Products />', () => {
  const wrapper = shallow(<Products />);

  

  it('renders one <IconList /> components', () => {
    expect(wrapper.find(IconList).length).toBe(1);
  });

  it('renders one <Thumbnails  /> components', () => {
    expect(wrapper.find(ThumbnailGallery).length).toBe(1);
  });

  it('renders one <ProductDetails  /> components', () => {
    expect(wrapper.find(ProductDetails).length).toBe(1);
  });

  it('renders one <ProductInfo  /> components', () => {
    expect(wrapper.find(ProductInfo).length).toBe(1);
  });
});
