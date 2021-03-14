import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import $ from 'jquery';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import SortForm from './ReviewList/SortForm.jsx';
import NewReview from './NewReview/NewReview.jsx';
import PhotoModal from './PhotoModal.jsx';
import CoolButton from './CoolButton.jsx';
import '../../public/css.js';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.state = {
      productId,
      productName: '',
      reviews: [],
      reviewCount: 2,
      ratings: {},
      loaded: false,
      displayedReviews: [],
      newReview: false,
      starsSelected: [],
      currentSort: 'relevant',
      modalPhoto: null,
      prodUrl: null,
    };

    this.newReviewElement = React.createRef();

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.getSort = this.getSort.bind(this);
    this.sendNewReview = this.sendNewReview.bind(this);
    this.markAsHelpful = this.markAsHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.selectStars = this.selectStars.bind(this);
    this.clearStars = this.clearStars.bind(this);
    this.photoModal = this.photoModal.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    const prodId = productId;
    axios({
      method: 'get',
      url: '/reviews',
      params: { id: prodId },
    })
      .then((data) => {
        this.setState({
          reviews: data.data.results,
          productName: data.data.name,
          prodUrl: data.data.prodUrl,
        });
        this.getSort('relevant');
      });
    axios({
      method: 'get',
      url: '/meta',
      params: { id: prodId },
    })
      .then((data) => {
        this.setState({
          ratings: data.data,
          loaded: true,
        });
      });
  }

  getSort(val) {
    const { reviews } = this.state;
    this.setState({
      currentSort: val,
    });
    if (val === 'helpful') {
      this.sortReviews('help');
    }
    if (val === 'newest') {
      this.sortReviews('date');
    }
    if (val === 'relevant') {
      this.setState({
        displayedReviews: reviews,
      });
    }
  }

  sortReviews(sort) {
    const { reviews } = this.state;
    const sortedRevs = [];
    const currRevs = reviews;

    for (let i = 0; i < currRevs.length; i += 1) {
      const review = currRevs[i];
      if (!sortedRevs.length) {
        sortedRevs.push(review);
      } else {
        let entered = false;
        for (let j = 0; j < sortedRevs.length; j += 1) {
          const sortedRev = sortedRevs[j];
          if (sort === 'help') {
            if (review.helpfulness > sortedRev.helpfulness && !entered) {
              sortedRevs.splice(j, 0, review);
              entered = true;
            }
          } else if (sort === 'date') {
            if (review.date > sortedRev.date && !entered) {
              sortedRevs.splice(j, 0, review);
              entered = true;
            }
          }
        }
        if (!entered) {
          sortedRevs.push(review);
        }
      }
    }
    this.setState({
      displayedReviews: sortedRevs,
    });
  }

  photoModal(src) {
    const modal = document.getElementById('pModal');
    const photo = document.getElementsByClassName('pModalPhoto')[0];
    this.setState({
      modalPhoto: src,
    });
    modal.style.display = 'block';
    photo.onclick = () => {
      this.sendClickData('close photo modal by clicking photo');
      modal.style.display = 'none';
    };
    window.onclick = (event) => {
      if (event.target === modal) {
        this.sendClickData('close photo modal by clicking outside of modal');
        modal.style.display = 'none';
      }
    };
  }

  seeMoreReviews() {
    const { reviewCount } = this.state;
    const newCount = reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  sendNewReview(obj) {
    const { productId } = this.state;
    const newObj = obj;
    newObj.product_id = productId;
    axios.post('/newReview', newObj)
      .then((response) => {
        console.log(response.data);
      });
  }

  selectStars(num) {
    const { starsSelected } = this.state;
    const currentSelected = starsSelected;
    if (currentSelected.indexOf(num) === -1) {
      currentSelected.push(num);
    } else {
      const loc = currentSelected.indexOf(num);
      currentSelected.splice(loc, 1);
    }
    if (!currentSelected.length) {
      this.clearStars();
    } else {
      this.filterRevs(currentSelected);
    }
  }

  clearStars() {
    const { currentSort } = this.state;
    this.getSort(currentSort);
    this.setState({
      starsSelected: [],
    });
  }

  filterRevs(arr) {
    const { reviews } = this.state;
    const displayedRevs = [];
    reviews.forEach((review) => {
      if (arr.indexOf(review.rating) !== -1) {
        displayedRevs.push(review);
      }
    });
    this.setState({
      displayedReviews: displayedRevs,
    });
  }

  markAsHelpful(revId) {
    axios.put('/helpful', { id: revId });
  }

  reportReview(revId) {
    axios.put('/report', { id: revId });
  }

  sendClickData(ele) {
    let currentTime = new Date();
    currentTime = currentTime.toISOString();
    const clickObj = {
      element: ele,
      widget: 'reviews',
      time: currentTime,
    };
    axios({
      method: 'post',
      url: '/interactions',
      params: clickObj,
    });
  }

  stopScrolling() {
    const { newReview } = this.state;
    if (!newReview) {
      $('body').addClass('modal-open');
    } else {
      $('body').removeClass('modal-open');
      setTimeout(() => this.clearData(), 2000);
    }
    this.setState({
      newReview: !newReview,
    });
  }

  clearData() {
    $('.radio-btn, .charRadios, .recRadios').prop('checked', false);
    $('.newRevInput, .newRevPhotoInput').val('');
    this.newReviewElement.current.clearState();
  }

  render() {
    const {
      loaded, reviews, displayedReviews, ratings,
      starsSelected, productName, newReview, prodUrl, modalPhoto,
    } = this.state;
    if (loaded) {
      const allReviews = reviews;
      const { reviewCount } = this.state;
      const factors = Object.keys(ratings.characteristics).map((key) => (
        [key, ratings.characteristics[key].id]
      ));
      return (
        <div id="reviews">
          <h1>
            RATINGS &amp; REVIEWS
          </h1>
          <div className="parent">
            <div id="ratingBox">
              <RatingBreakdown
                clearStars={this.clearStars}
                starsSelected={starsSelected}
                ratings={ratings}
                selectStars={this.selectStars}
                sendClickData={this.sendClickData}
              />
            </div>
            <div id="reviewBox">
              <SortForm
                reviewCount={allReviews.length}
                getSort={this.getSort}
                sendClickData={this.sendClickData}
              />
              <ReviewList
                seeMoreReviews={this.seeMoreReviews}
                reviewCount={reviewCount}
                reviews={displayedReviews}
                markAsHelpful={this.markAsHelpful}
                reportReview={this.reportReview}
                photoModal={this.photoModal}
                sendClickData={this.sendClickData}
              />
              <div id="mainButtons">
                {allReviews.length > reviewCount
                  ? <CoolButton sendClickData={this.sendClickData} func={this.seeMoreReviews} name="MORE REVIEWS" text="show more review button clicked" />
                  : <></>}
                <div className="section full-height">
                  <input onClick={() => { this.sendClickData('review modal'); this.stopScrolling(); }} className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                  <label htmlFor="modal-btn">
                    NEW REVIEW
                  </label>
                  <div className="modal">
                    <div className="modal-wrap">
                      <NewReview
                        ref={this.newReviewElement}
                        name={productName}
                        factors={factors}
                        show={newReview}
                        sendNewReview={this.sendNewReview}
                        photoModal={this.photoModal}
                        prodUrl={prodUrl}
                        sendClickData={this.sendClickData}
                      />
                    </div>
                  </div>
                </div>
                <PhotoModal src={modalPhoto} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

ReviewApp.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ReviewApp;
