/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ImageGallery from './LeftSection/ImageGallery.jsx';

import ProductDetails from './RightSection/ProductDetails.jsx';

import ProductInfo from './BottomSection/ProductInfo.jsx';
import {
  Wrapper, Header, Image, Detail, Info,
} from '../elements/Products.element.jsx';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      id: 0,
      product: {},
      styles: [],
      selectedStyleId: '',
    };
    this.getStyles = this.getStyles.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        this.setState({ products: response.data });
        if (this.state.products.length !== 0) {
          const random = Math.floor(Math.random() * this.state.products.length);
          this.setState({ id: this.state.products[random].id });
        }
      })
      .then(() => {
        axios.get(`/products/${this.state.id}`)
          .then((response) => {
            const { data } = response;
            const {
              category, default_price, description, features, name, slogan,
            } = data;
            this.setState({
              product: {
                category, default_price, description, features, name, slogan,
              },
            });
          });
      })
      .catch((err) => {
        throw err;
      });
  }

  getStyles(styles) {
    this.setState({ styles });
  }

  getSelectedStyle(styleId) {
    this.setState({ selectedStyleId: styleId });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <p> SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT OFFER-NEW PRODUCT-HIGHLIGHT</p>
        </Header>
        <Image>
          {this.state.id !== 0 && <ImageGallery getStyles={this.getStyles} id={this.state.id} getSelectedStyle={this.getSelectedStyle} />}
        </Image>
        <Detail>
          {this.state.id !== 0 && <ProductDetails product={this.state.product} styles={this.state.styles} getSelectedStyle={this.getSelectedStyle} selectedStyleId={this.state.selectedStyleId} id={this.state.id} />}
        </Detail>
        <Info>
          <ProductInfo product={this.state.product} />
        </Info>
      </Wrapper>
    );
  }
}

export default Products;
