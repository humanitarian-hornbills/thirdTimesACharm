import React from 'react';
import ReactDOM from 'react-dom';
import ReviewApp from '../Reviews/src/Components/ReviewApp.jsx';
import Products from '../ProductDetails/src/components/Products.jsx';
import RelatedProducts from '../RelatedProducts/src/components/RelatedProducts.jsx';
import QA from '../QandA/src/QA.jsx';
import FadeInSection from '../Reviews/src/Components/FadeIn.jsx';
import { createGlobalStyle } from 'styled-components';

const products = [14931, 14932, 14034, 14296, 14807];
const randomNum = Math.floor(Math.random() * products.length);
const id = products[randomNum];

// eslint-disable-next-line import/prefer-default-export
const GlobalStyle = createGlobalStyle`
  #app>div{
    box-sizing: border-box;
    margin: 30px 10%;
  }
`;

const App = () => (
  <>
    <Products product={id} />
    <RelatedProducts />
    <QA product={id} />
    <FadeInSection productId={id} />
    <GlobalStyle />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// ReactDOM.render(
//   <Products productId={id} />,
//   document.getElementById('products'),
// );

// ReactDOM.render(
//   <ReviewApp productId={id} />,
//   document.getElementById('reviews'),
// );
