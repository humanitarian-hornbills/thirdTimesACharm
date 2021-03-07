import React from 'react';
import axios from 'axios';
import Rating from 'react-star-ratings';
import getRating from '../utility/getRating.js';
import getSalePrice from '../utility/getSalePrice.js';
import { FaListUl } from 'react-icons/fa';
import HoverThumbnails from './HoverThumbnails.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'Product name',
      imgs: [],
      coverImg: ['./img/img-test.png'],
      rating: 0,
      salePrice: null,
      thumbnailVisible: false,
      cardProduct: { name: '', category: '', default_price: '' },
      // price: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.changeImg = this.changeImg.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        const imgs = res.data.results[0].photos[0].thumbnail_url;
        const { results } = res.data;
        this.setState({ salePrice: getSalePrice(results) });
        const images = res.data.results.map((style) => (
          style.photos[0]
        ));
        this.setState({
          imgs: images,
          coverImg: images,
        });
        axios.get(`/products/${id}`)
          .then((res) => {
            this.setState({ cardProduct: res.data });
          });
        getRating(id, (average) => {
          this.setState({ rating: average || 0 });
        });
      });
  }

  handleClick(e) {
    e.preventDefault();
    const { id } = this.props;
    this.props.onClick(id);
  }

  handleOnMouseEnter() {
    this.setState({ thumbnailVisible: true });
  }

  handleOnMouseLeave() {
    this.setState({ thumbnailVisible: false });
  }

  changeImg(img) {
    this.setState({ coverImg: [img] })
  }

  render() {
    const imgSrc = this.state.coverImg[0].thumbnail_url || this.state.coverImg[0];
    const {
      imgs,
      rating,
      salePrice,
      cardProduct,
      thumbnailVisible,
    } = this.state;
    return (
      <div
        className="card"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div className="frame">
          <img src={imgSrc} alt="product" />
        </div>
        {this.props.list === 'outfitList' ? <div className="action" onClick={this.handleClick}>&times;</div> : <div className="action" onClick={this.handleClick}><span className="icon"><FaListUl /></span></div>}
        <HoverThumbnails images={imgs} isVisible={thumbnailVisible} changeImg={this.changeImg} />
        <div className="category">{cardProduct.category}</div>
        <div className="product-name">{cardProduct.name}</div>
        <div className="price">
          {salePrice ? <span className="sale">${cardProduct.default_price}</span> : <span>${cardProduct.default_price}</span>}
          {salePrice && <span>${salePrice}</span>}
        </div>
        <div className="rating">
          <Rating
            rating={rating}
            starRatedColor="RGB(253, 204, 13)"
            starDimension="20px"
            starSpacing="1px"
          />
        </div>
      </div>
    );
  }
}

export default Card;
