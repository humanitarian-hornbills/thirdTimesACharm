import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import AddPhoto from '../Components/NewReview/AddPhoto.jsx';
import Characteristics from '../Components/NewReview/Characteristics.jsx';
import CharItem from '../Components/NewReview/CharItem.jsx';
import NewReview from '../Components/NewReview/NewReview.jsx';
import DisplayPhotos from '../Components/NewReview/DisplayPhotos.jsx';

const sampleCharacteristics = [['Fit', 50013], ['Length', 50014],
  ['Comfort', 50015], ['Quality', 50016]];

const sampleOptions = {
  1: 'Runs tight',
  2: 'Runs slightly tight',
  3: 'Perfect',
  4: 'Runs slightly long',
  5: 'Runs long',
}

const samplePhotos = ['https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png', 'https://www.liveabout.com/thmb/0DNrjC90zr2BXxMwrhhrDQeOYFs=/2332x1312/smart/filters:no_upscale()/NoMeGusta-5a314fde96f7d00037ef5d65.jpg', 'https://i.pinimg.com/originals/32/3f/d8/323fd8b794e9c1ab4f52de7e6b018852.jpg']

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
  expect(wrapper.find('p').text()).toContain('FIT');
  expect(wrapper.find('.smallFactor').text()).toContain('Runs tight');
})

test('display photos displays all the photos', () => {
  const wrapper = shallow(<DisplayPhotos photos={samplePhotos} />)
  expect(wrapper.find('img')).toHaveLength(3);
})