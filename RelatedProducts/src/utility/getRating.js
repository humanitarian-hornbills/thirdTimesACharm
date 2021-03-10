import axios from 'axios';

const getRating = (productId, callback) => {
  axios.get(`./reviews/${productId}`)
    .then((res) => {
      // const { results } = res.data;
      // const total = results.reduce((sum, review) => (
      //   sum + review.rating
      // ), 0);
      // const average = total / results.length;
      callback(Number(res.data));
    });
};
export default getRating;
