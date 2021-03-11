import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
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
    this.state = {
      productId: this.props.productId,
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

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.getSort = this.getSort.bind(this);
    this.showModal = this.showModal.bind(this);
    this.sendNewReview = this.sendNewReview.bind(this);
    this.markAsHelpful = this.markAsHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.selectStars = this.selectStars.bind(this);
    this.clearStars = this.clearStars.bind(this);
    this.photoModal = this.photoModal.bind(this);
  }

  componentDidMount() {
    const prodId = this.state.productId;
    axios({
      method: 'get',
      url: '/reviews',
      params: { id: prodId },
    })
      .then((data) => {
        console.log(data);
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
        displayedReviews: this.state.reviews,
      });
    }
  }

  sortReviews(sort) {
    const sortedRevs = [];
    const currRevs = this.state.reviews;

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

  showModal() {
    this.setState({
      newReview: !this.state.newReview,
    });
  }

  photoModal(src) {
    const modal = document.getElementById('pModal');
    const span = document.getElementsByClassName('pclose');
    this.setState({
      modalPhoto: src,
    });
    modal.style.display = 'block';
    const newSpan = [];
    Object.keys(span).forEach((key) => {
      span[key].onclick = () => {
        this.sendClickData('close photo modal with X');
        modal.style.display = 'none';
      };
      newSpan.push(span[key]);
    });
    window.onclick = (event) => {
      if (event.target === modal) {
        this.sendClickData('close photo modal by clicking outside of modal');
        modal.style.display = 'none';
      }
    };
  }

  seeMoreReviews() {
    const newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  sendNewReview(obj) {
    const newObj = obj;
    newObj.product_id = this.state.productId;
    axios.post('/newReview', newObj)
      .then((response) => {
        console.log(response);
      });
  }

  selectStars(num, action) {
    const currentSelected = this.state.starsSelected;
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
    this.getSort(this.state.currentSort);
    this.setState({
      starsSelected: [],
    });
  }

  filterRevs(arr) {
    const displayedRevs = [];
    this.state.reviews.forEach((review) => {
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
    console.log(clickObj);
    axios({
      method: 'post',
      url: '/interactions',
      params: clickObj,
    });
  }

  render() {
    console.log(this.state);
    if (this.state.loaded) {
      const allReviews = this.state.reviews;
      const reviews = this.state.displayedReviews;
      const { reviewCount } = this.state;
      const factors = Object.keys(this.state.ratings.characteristics).map((key) => (
        [key, this.state.ratings.characteristics[key].id]
      ));
      return (
        <div className="parent">
          <div id="ratingBox">
            <RatingBreakdown
              clearStars={this.clearStars}
              starsSelected={this.state.starsSelected}
              ratings={this.state.ratings}
              selectStars={this.selectStars}
              sendClickData={this.sendClickData}
            />
          </div>
          <div id="reviewBox">
            <SortForm reviewCount={allReviews.length} getSort={this.getSort} sendClickData={this.sendClickData} />
            <ReviewList
              seeMoreReviews={this.seeMoreReviews}
              reviewCount={reviewCount}
              reviews={reviews}
              markAsHelpful={this.markAsHelpful}
              reportReview={this.reportReview}
              photoModal={this.photoModal}
              sendClickData={this.sendClickData}
            />
            <div id="mainButtons">
              {allReviews.length > reviewCount
                ? <CoolButton sendClickData={this.sendClickData} func={this.seeMoreReviews} name="MORE REVIEWS" text="show more review button clicked" />
                : <></>}
              <CoolButton sendClickData={this.sendClickData} func={this.showModal} name="add review" text="add review button clicked" />
            </div>
            <NewReview
              name={this.state.productName}
              factors={factors}
              close={this.showModal}
              show={this.state.newReview}
              sendNewReview={this.sendNewReview}
              photoModal={this.photoModal}
              prodUrl={this.state.prodUrl}
              sendClickData={this.sendClickData}
            />
            <PhotoModal src={this.state.modalPhoto} />
          </div>
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default ReviewApp;
