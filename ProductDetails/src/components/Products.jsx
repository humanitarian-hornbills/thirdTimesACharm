/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Nav from './HeaderSection/Nav.jsx';
import IconList from './HeaderSection/IconList.jsx';
import ImageGallery from './LeftSection/ImageGallery.jsx';
import ImageModal from './ImageModal.jsx';

import ProductDetails from './RightSection/ProductDetails.jsx';

import ProductInfo from './BottomSection/ProductInfo.jsx';

import {
  Wrapper, Icon, Header, Image, Detail, Info,
} from '../elements/Products.element.jsx';
import { ImageUnderline } from '../elements/ImageCarousel.element.jsx';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      id: 0,
      product: {},
      styles: [],
      selectedStyleId: 0,
      curMainImageIndex: 0,
      fullScreenClicked: false,
      quantitySizeSelected: 0,
      main: true,
    };
    this.getStyles = this.getStyles.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
    this.getCurMainImageIndex = this.getCurMainImageIndex.bind(this);
    this.getFullScreenClicked = this.getFullScreenClicked.bind(this);
    this.getQuantitySizeSelected = this.getQuantitySizeSelected.bind(this);
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

  getCurMainImageIndex(mainImageIndex) {
    this.setState({ curMainImageIndex: mainImageIndex });
  }

  getFullScreenClicked(clicked) {
    this.setState({ fullScreenClicked: clicked });
  }

  getQuantitySizeSelected(choosed) {
    this.setState({ quantitySizeSelected: this.state.quantitySizeSelected + choosed });
  }

  render() {
    return (
      <Wrapper>
        <Icon>
          <IconList />
        </Icon>
        <Header>
          <ImageUnderline top={this.state.main} />
          <Nav quantitySizeSelected={this.state.quantitySizeSelected} />
        </Header>
        {this.state.fullScreenClicked ? (
          <ImageModal
            curMainImageIndex={this.state.curMainImageIndex}
            styles={this.state.styles}
            getFullScreenClicked={
              this.getFullScreenClicked
            }
          />
        ) : ''}
        <Image>
          {this.state.id !== 0 && <ImageGallery getStyles={this.getStyles} id={this.state.id} getSelectedStyle={this.getSelectedStyle} getCurMainImageIndex={this.getCurMainImageIndex} getFullScreenClicked={this.getFullScreenClicked} />}
        </Image>
        <Detail>
          {this.state.id !== 0 && <ProductDetails product={this.state.product} styles={this.state.styles} getSelectedStyle={this.getSelectedStyle} selectedStyleId={this.state.selectedStyleId} id={this.state.id} getQuantitySizeSelected={this.getQuantitySizeSelected} />}
        </Detail>
        <Info>
          <ProductInfo product={this.state.product} />
        </Info>
      </Wrapper>
    );
  }
}

export default Products;
