import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import AddPhoto from '../Components/NewReview/AddPhoto.jsx';
import Characteristics from '../Components/NewReview/Characteristics.jsx';
import CharItem from '../Components/NewReview/CharItem.jsx';
import NewReview from '../Components/NewReview/NewReview.jsx';

const sampleCharacteristics = [['Fit', 50013], ['Length', 50014],
  ['Comfort', 50015], ['Quality', 50016]];

const sampleOptions = {
  1: 'Runs tight',
  2: 'Runs slightly tight',
  3: 'Perfect',
  4: 'Runs slightly long',
  5: 'Runs long',
}

test('adds photos', () => {
  const wrapper = shallow(<AddPhoto />);
  wrapper
    .find('input')
    .first()
    .simulate('change', { target: { name: 0, value: 'foo' } });

  expect(wrapper.state('photos')).toHaveLength(1);
});

test('sends photos', () => {
  const wrapper = shallow(<AddPhoto />);
  const nextWrapper = shallow(<NewReview />);
  wrapper.setState({ photos: ['foo'] })
    // .find('input')
    // .first()
    // .simulate('change', { target: { name: 0, value: 'foo' } })
    .find('button')
    .simulate('click');
  expect(nextWrapper.state('photos')).toHaveLength(1);
});

test('there should be a characteristic input for each characteristic', () => {
  const wrapper = mount(<Characteristics factors={sampleCharacteristics} />);
  expect(wrapper.find(CharItem)).toHaveLength(4);
});

test('CharItem renders correct text', () => {
  const wrapper = shallow(<CharItem options={sampleOptions} name={sampleCharacteristics[0][0]} />);
  expect(wrapper.find('p').text()).toContain('Fit');
  expect(wrapper.find('label').first().text()).toContain('Runs tight');
})
