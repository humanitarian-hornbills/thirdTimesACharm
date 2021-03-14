import React from 'react';
import PropTypes from 'prop-types';
import Breakdown from './Breakdown.jsx';
import Factors from './Factors.jsx';
import SelectedList from './SelectedList.jsx';
import AvgRating from './AvgRating.jsx';
import AvgRec from './AvgRec.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.clearFilters = this.clearFilters.bind(this);
    this.addStar = this.addStar.bind(this);
  }

  addStar(num) {
    const { selected } = this.state;
    if (selected.indexOf(num) === -1) {
      this.setState({
        selected: [...selected, num],
      });
    } else {
      const currentStars = selected;
      const index = currentStars.indexOf(num);
      currentStars.splice(index, 1);
      this.setState({
        selected: currentStars,
      });
    }
  }

  clearFilters() {
    const { clearStars } = this.props;
    clearStars();
    this.setState({
      selected: [],
    });
  }

  render() {
    const { ratings, selectStars, sendClickData } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <div id="ratingSummary">
          <AvgRating ratings={ratings.ratings} />
          <AvgRec recommended={ratings.recommended} />
        </div>
        <div className="ratingDivider" />
        <h3>RATING BREAKDOWN</h3>
        {selected.length
          ? (
            <>
              <SelectedList
                addStar={this.addStar}
                selectStars={selectStars}
                selected={selected}
                sendClickData={sendClickData}
              />
              <button
                id="clearRatingFliterBtn"
                type="button"
                className="link reviewBody"
                onClick={() => { this.clearFilters(); sendClickData('clear rating filters'); }}
              >
                <p>
                  Clear all filters
                </p>
              </button>
            </>
          )
          : <></>}
        <Breakdown
          addStar={this.addStar}
          selectStars={selectStars}
          ratings={ratings.ratings}
          sendClickData={sendClickData}
        />
        <div className="ratingDivider" />
        <Factors factors={ratings.characteristics} />
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  clearStars: PropTypes.func.isRequired,
  selectStars: PropTypes.func.isRequired,
  sendClickData: PropTypes.func.isRequired,
  ratings: PropTypes.shape({
    ratings: PropTypes.objectOf(
      PropTypes.string,
    ),
    recommended: PropTypes.objectOf(
      PropTypes.string,
    ),
    characteristics: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default RatingBreakdown;

// const RatingBreakdown = (props) => (
//   <div>
//     <p>
//       Ratings &amp; Reviews
//     </p>
//     <RatingSummary
//       ratings={props.ratings.ratings}
//       recommended={props.ratings.recommended}
//     />
//     <Breakdown selectStars={props.selectStars} ratings={props.ratings.ratings} />
//     <Factors factors={props.ratings.characteristics} />
//   </div>
// );
// {
//   "product_id": "14931",
//   "ratings": {
//       "1": "5",
//       "2": "8",
//       "3": "15",
//       "4": "8",
//       "5": "3"
//   },
//   "recommended": {
//       "false": "5",
//       "true": "34"
//   },
//   "characteristics": {
//       "Fit": {
//           "id": 50013,
//           "value": "2.9354838709677419"
//       },
//       "Length": {
//           "id": 50014,
//           "value": "3.1612903225806452"
//       },
//       "Comfort": {
//           "id": 50015,
//           "value": "3.0967741935483871"
//       },
//       "Quality": {
//           "id": 50016,
//           "value": "3.0967741935483871"
//       }
//   }
// }
