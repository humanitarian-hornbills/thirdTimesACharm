/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Products from '../src/elements/Products';
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

    it('Shallow rendering', () => {
        const products = [14931, 14932, 14034, 14296, 14807];
        const randomNum = Math.floor(Math.random() * products.length);
        const id = products[randomNum];

        const componentInstance = wrapper.instance();
        componentInstance.componentDidMount();
        expect(wrapper.state('fullScreenClicked')).toBe(false);
        expect(wrapper.state('styles')).toEqual([]);
        expect(wrapper.state('selectedStyleId')).toBe(0);
        expect(wrapper.state('curMainImageIndex')).toBe(0);
        expect(wrapper.state('quantitySizeSelected')).toBe(0);
        expect(wrapper.state('mainCurrent')).toBe(0);
        expect(wrapper.state('shoppingCart')).toBe(false);
    });
});
