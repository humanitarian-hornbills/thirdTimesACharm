import React from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './RatingSummary.jsx';
import Breakdown from './Breakdown.jsx';
import Factors from './Factors.jsx';
import SelectedList from './SelectedList.jsx';

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
    if (this.state.selected.indexOf(num) === -1) {
      this.setState({
        selected: [...this.state.selected, num],
      });
    } else {
      const currentStars = this.state.selected;
      const index = currentStars.indexOf(num);
      currentStars.splice(index, 1);
      this.setState({
        selected: currentStars,
      });
    }
  }

  clearFilters() {
    this.props.clearStars();
    this.setState({
      selected: [],
    });
  }

  render() {
    return (
      <div>
        <p>
          Ratings &amp; Reviews
        </p>
        <RatingSummary
          ratings={this.props.ratings.ratings}
          recommended={this.props.ratings.recommended}
        />
        {this.state.selected.length
          ? (
            <>
              <SelectedList selected={this.state.selected} />
              <p className="link" onClick={() => { this.clearFilters(); }}>Clear all filters</p>
            </>
          )
          : <></>}
        <p>Rating Breakdown</p>
        <Breakdown
          addStar={this.addStar}
          selectStars={this.props.selectStars}
          ratings={this.props.ratings.ratings}
        />
        <Factors factors={this.props.ratings.characteristics} />
      </div>
    );
  }
}

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
