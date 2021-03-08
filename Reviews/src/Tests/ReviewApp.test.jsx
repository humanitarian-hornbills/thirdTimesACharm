import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import ReviewApp from '../Components/ReviewApp.jsx';
import ImageComponent from '../Components/ImageComponent.jsx'

const sampleReview = {
  review_id: 147757,
  rating: 5,
  summary: 'summary',
  recommend: true,
  response: null,
  body: 'body',
  date: '2020-09-08T00:00:00.000Z',
  reviewer_name: 'Mandy46',
  helpfulness: 25,
  photos: [
    {
      id: 186995,
      url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
    },
  ],
};

test('has loading screen', () => {
  const wrapper = shallow(<ReviewApp />);
  expect(wrapper.find('div').text()).toContain('Loading');
});

function setup() {
  const props = {
    id: 14932,
  };
  const wrapper = shallow(<ReviewApp />);
  return { wrapper, props };
}

test('changes size of photo', () => {
  const wrapper = mount(<ImageComponent src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" />);
  wrapper
    .find('img')
    .simulate('click');

  expect(wrapper.state().isOpen).toBe(true);
});

test('ReviewApp has buttons', () => {
  const wrapper = mount(<ReviewApp productId={14932} />);
  // wrapper.instance().componentDidMount();
  wrapper.update()
  expect(wrapper.find('button')).toHaveLength(2);
});
