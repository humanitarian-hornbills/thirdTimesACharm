/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Nav from './HeaderSection/Nav.jsx';
import IconList from './HeaderSection/IconList.jsx';
import ThumbnailGallery from './LeftSection/ThumbnailGallery.jsx';
import ImageGallery from './LeftSection/ImageGallery.jsx';
import ImageModal from './ImageModal.jsx';

import ProductDetails from './RightSection/ProductDetails.jsx';

import ProductInfo from './BottomSection/ProductInfo.jsx';

import {
  Wrapper, Icon, Header, Thumbnails, Image, Detail, Info,
} from '../elements/Products.element.jsx';
import { ImageUnderline } from '../elements/ImageCarousel.element.jsx';

class Products extends React.Component {
  constructor(props) {
    super(props);
    const productId = this.props.product;
    this.state = {
      products: [],
      id: productId,
      product: {},
      styles: [],
      selectedStyleId: 0,
      curMainImageIndex: 0,
      fullScreenClicked: false,
      quantitySizeSelected: 0,
      mainCurrent: 0,
      shoppingCart: false,
      clickElement: '',
    };
    this.getStyles = this.getStyles.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
    this.getCurMainImageIndex = this.getCurMainImageIndex.bind(this);
    this.getFullScreenClicked = this.getFullScreenClicked.bind(this);
    this.getQuantitySizeSelected = this.getQuantitySizeSelected.bind(this);
    this.getMainCurrent = this.getMainCurrent.bind(this);
    this.getShoppingCartStatus = this.getShoppingCartStatus.bind(this);
    this.getClickInteraction = this.getClickInteraction.bind(this);
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        this.setState({ products: response.data });
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
          })
          .catch((err) => {
            throw err;
          });
      }).then(() => {
        let currentTime = new Date();
        currentTime = currentTime.toISOString();
        axios({
          method: 'post',
          url: '/interactions',
          params: {
            element: this.state.clickElement,
            widget: 'overview',
            time: currentTime,
          },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            throw err;
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

  getQuantitySizeSelected(quantity) {
    this.setState({ quantitySizeSelected: this.state.quantitySizeSelected + quantity });
  }

  getMainCurrent(current) {
    this.setState({ mainCurrent: current });
  }

  getShoppingCartStatus(status) {
    this.setState({ shoppingCart: status });
  }

  // eslint-disable-next-line class-methods-use-this
  getClickInteraction(ele) {
    this.setState({ clickElement: ele });
  }

  render() {
    return (
      <Wrapper>
        <Icon>
          <IconList />
        </Icon>
        <Header>
          <ImageUnderline top />
          <Nav
            quantitySizeSelected={this.state.quantitySizeSelected}
            getShoppingCartStatus={this.getShoppingCartStatus}
            getSearchId={this.getSearchId}
            id={this.state.id}
          />
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
        <Thumbnails>
          {this.state.id !== 0 && (
            <ThumbnailGallery
              styles={this.state.styles}
              getMainCurrent={this.getMainCurrent}
              mainCurrent={this.state.mainCurrent}
              getClickInteraction={this.getClickInteraction}
            />
          )}
        </Thumbnails>
        <Image>
          {this.state.id !== 0 && (
            <ImageGallery
              getStyles={this.getStyles}
              id={this.state.id}
              getSelectedStyle={this.getSelectedStyle}
              getCurMainImageIndex={this.getCurMainImageIndex}
              getFullScreenClicked={this.getFullScreenClicked}
              mainCurrent={this.state.mainCurrent}
              getMainCurrent={this.getMainCurrent}
              getClickInteraction={this.getClickInteraction}
            />
          )}
        </Image>
        {/* <ImageUnderline image /> */}
        <Detail>
          {this.state.id !== 0
            && (
              <ProductDetails
                product={this.state.product}
                styles={this.state.styles}
                getSelectedStyle={this.getSelectedStyle}
                selectedStyleId={this.state.selectedStyleId}
                id={this.state.id}
                getQuantitySizeSelected={this.getQuantitySizeSelected}
                getMainCurrent={this.getMainCurrent}
                getClickInteraction={this.getClickInteraction}
              />
            )}
        </Detail>
        <Info>
          <ProductInfo product={this.state.product} />
        </Info>
      </Wrapper>
    );
  }
}

export default Products;
