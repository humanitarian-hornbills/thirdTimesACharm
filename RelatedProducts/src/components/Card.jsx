import React from 'react';
import axios from 'axios';
import Rating from 'react-star-ratings';
import getRating from '../utility/getRating.js';
import getSalePrice from '../utility/getSalePrice.js';
import { FaListUl } from 'react-icons/fa';
import '../../public/css/css.js';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'Product name',
      imgs: ['./img/img-test.png'],
      rating: 0,
      salePrice: null,
      cardProduct: { name: '', category: '', default_price: '' },
      // price: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        const imgs = res.data.results[0].photos[0].thumbnail_url;
        const { results } = res.data;
        this.setState({ salePrice: getSalePrice(results) });
        if (imgs) {
          this.setState({
            imgs: results[0].photos,
          });
        }
      });
    axios.get(`/products/${id}`)
      .then((res) => {
        this.setState({ cardProduct: res.data });
      });
    getRating(id, (average) => {
      this.setState({ rating: average || 0 });
    });
  }

  handleClick(e) {
    const { id } = this.props;
    e.preventDefault();
    this.props.handleClick(id);
  }

  render() {
    const imgSrc = this.state.imgs[0].thumbnail_url || this.state.imgs[0];
    const { rating, salePrice, cardProduct } = this.state;
    return (
      <div className="card">
        <div className="frame">
          <img src={imgSrc} alt="product image" />
        </div>
        {this.props.list === 'outfitList' ? <div className="action" onClick={this.handleClick}>&times;</div> : <div className="action" onClick={this.handleClick}><span className="icon"><FaListUl/></span></div>}
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
