import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import ReviewApp from '../Reviews/src/Components/ReviewApp.jsx';
import Products from '../ProductDetails/src/components/Products.jsx';
import RelatedProducts from '../RelatedProducts/src/components/RelatedProducts.jsx';
import QA from '../QandA/src/QA.jsx';
// import FadeInSection from '../Reviews/src/Components/FadeIn.jsx';
import FadeInSection from '../Reviews/src/Components/FadeInSection.jsx';

const products = [14931, 14932, 14034, 14296, 14807];
const randomNum = Math.floor(Math.random() * products.length);
const id = products[randomNum];

// eslint-disable-next-line import/prefer-default-export
const GlobalStyle = createGlobalStyle`
  #app>div{
    box-sizing: border-box;
    margin: 80px 10%;
  }
`;

const App = () => (
  <>
    <Products product={id} />
    <RelatedProducts product={id} />
    <QA product={id} />
    <FadeInSection>
      <ReviewApp productId={id} />
    </FadeInSection>
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
