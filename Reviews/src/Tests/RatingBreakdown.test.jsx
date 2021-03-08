import { shallow, mount, render } from 'enzyme';
import React from 'react';
import AvgRating from '../Components/RatingBreakdown/AvgRating.jsx';
import AvgRec from '../Components/RatingBreakdown/AvgRec.jsx';
import Breakdown from '../Components/RatingBreakdown/Breakdown.jsx';
import BreakdownItem from '../Components/RatingBreakdown/BreakdownItem.jsx';

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

const testMeta = {
  product_id: '14931',
  ratings: {
    1: '5',
    2: '8',
    3: '15',
    4: '8',
    5: '3',
  },
  recommended: {
    false: '5',
    true: '34',
  },
  characteristics: {
    Fit: {
      id: 50013,
      value: '2.9354838709677419',
    },
    Length: {
      id: 50014,
      value: '3.1612903225806452',
    },
    Comfort: {
      id: 50015,
      value: '3.0967741935483871',
    },
    Quality: {
      id: 50016,
      value: '3.0967741935483871',
    },
  },
};

test('averages ratings', () => {
  const wrapper = shallow(<AvgRating ratings={testMeta.ratings} />);
  expect(wrapper.find('div').text()).toContain('2.90');
});

test('averages recs', () => {
  const wrapper = shallow(<AvgRec recommended={testMeta.recommended} />);
  expect(wrapper.find('div').text()).toContain('87% of reviews recommended this product');
});

test('adds breakdowns for each star', () => {
  const wrapper = mount(<Breakdown ratings={testMeta.ratings} />);
  expect(wrapper.find(BreakdownItem)).toHaveLength(5);
});

// describe('has buttons', () => {
//   it('Should have a button', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('button').exists()).toBe(true);
//   });
// });

// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
// import App from './App.jsx';

// test('Link changes the class when hovered', () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.find('h1'));
//   expect(wrapper.find('h1').text()).toContain('Hello');
// });
