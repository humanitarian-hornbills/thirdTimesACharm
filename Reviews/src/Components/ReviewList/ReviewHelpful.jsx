import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({
  review, markAsHelpful, reportReview, sendClickData,
}) => {
  const [hClicked, setHClicked] = useState(false);
  const [rClicked, setRClicked] = useState(false);
  const total = review.helpfulness;
  const nextTotal = total + 1;
  return (
    <div className="reviewHelpful">
      <p>
        Helpful? &nbsp;
        {!hClicked
          ? (
            <>
              <span
                role="button"
                tabIndex="0"
                className="link"
                onKeyPress={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
                onClick={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
              >
                Yes
              </span>
          &nbsp;
              (
              {total}
              )
            </>
          )
          : (
            <>
              <span className="link">Yes</span>
          &nbsp;
              (
              {nextTotal}
              )
            </>
          )}
        &nbsp;&nbsp;|
        &nbsp;&nbsp;
        {!rClicked
          ? (
            <span
              role="button"
              tabIndex="0"
              className="link"
              onKeyPress={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
              onClick={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
            >
              Report
            </span>
          )
          : <span className="link">Report</span>}
      </p>
    </div>
  );
};

ReviewHelpful.propTypes = {
  helpfulness: PropTypes.number,
};

ReviewHelpful.defaultProps = {
  helpfulness: null,
};

export default ReviewHelpful;


// const ReviewHelpful = ({
//   review, markAsHelpful, reportReview, sendClickData,
// }) => {
//   const [hClicked, setHClicked] = useState(false);
//   const [rClicked, setRClicked] = useState(false);
//   const total = review.helpfulness;
//   const nextTotal = total + 1;
//   return (
//     <div className="reviewHelpful">
//       <p>
//         Helpful? &nbsp;
//         {!hClicked
//           ? (
//             <>
//               <span
//                 role="button"
//                 tabIndex="0"
//                 className="link"
//                 onKeyPress={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
//                 onClick={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
//               >
//                 Yes
//               </span>
//           &nbsp;
//               (
//               {total}
//               )
//             </>
//           )
//           : (
//             <>
//               <span className="link">Yes</span>
//           &nbsp;
//               (
//               {nextTotal}
//               )
//             </>
//           )}
//         &nbsp;&nbsp;|
//         &nbsp;&nbsp;
//         {!rClicked
//           ? (
//             <span
//               role="button"
//               tabIndex="0"
//               className="link"
//               onKeyPress={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
//               onClick={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
//             >
//               Report
//             </span>
//           )
//           : <span className="link">Report</span>}
//       </p>
//     </div>
//   );
// };

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number,
// };

// ReviewHelpful.defaultProps = {
//   helpfulness: null,
// };



// class ReviewHelpful extends React.Component {
//   constructor(props) {
//     super (props);
//     this.state = {
//       hClicked: false,
//       rClicked: false
//     }
//   }

//   render {

//   }
// }

// = ({
//   review, markAsHelpful, reportReview, sendClickData,
// }) => {
//   const [hClicked, setHClicked] = useState(false);
//   const [rClicked, setRClicked] = useState(false);
//   const total = review.helpfulness;
//   const nextTotal = total + 1;
//   return (
//     <div className="reviewHelpful">
//       <p>
//         Helpful? &nbsp;
//         {!hClicked
//           ? (
//             <>
//               <span
//                 role="button"
//                 tabIndex="0"
//                 className="link"
//                 onKeyPress={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
//                 onClick={() => { markAsHelpful(review.review_id); setHClicked(true); sendClickData('mark review as helpful'); }}
//               >
//                 Yes
//               </span>
//           &nbsp;
//               (
//               {total}
//               )
//             </>
//           )
//           : (
//             <>
//               <span className="link">Yes</span>
//           &nbsp;
//               (
//               {nextTotal}
//               )
//             </>
//           )}
//         &nbsp;&nbsp;|
//         &nbsp;&nbsp;
//         {!rClicked
//           ? (
//             <span
//               role="button"
//               tabIndex="0"
//               className="link"
//               onKeyPress={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
//               onClick={() => { reportReview(review.review_id); setRClicked(true); sendClickData('report review'); }}
//             >
//               Report
//             </span>
//           )
//           : <span className="link">Report</span>}
//       </p>
//     </div>
//   );
// };