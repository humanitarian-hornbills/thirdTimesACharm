const express = require('express');
const axios = require('axios');
const path = require('path');
const api = require('./config.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

//agustin server
// 14932
app.get('/reviews', (req, res) => {
  const prodId = req.query.id;
  axios({
    method: 'get',
    url: `${api.api}/reviews/?product_id=${prodId}&count=100&sort=relevant`,
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response1) => {
      axios({
        method: 'get',
        url: `${api.api}/products/${prodId}`,
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response2) => {
          axios({
            method: 'get',
            url: `${api.api}/products/${prodId}/styles/?product_id=${prodId}`,
            headers: {
              Authorization: api.TOKEN,
            },
          })
            .then((response3) => {
              const reviewDataObj = {
                name: response2.data.name,
                results: response1.data.results,
                prodUrl: response3.data.results[0].photos[0].url,
              };
              res.send(reviewDataObj);
            });
        });
    });
});

app.get('/meta', (req, res) => {
  const prodId = req.query.id;
  axios({
    method: 'get',
    url: `${api.api}/reviews/meta/?product_id=${prodId}`,
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.post('/newReview', (req, res) => {
  const newReview = req.body;
  console.log(newReview)
  axios({
    method: 'post',
    url: `${api.api}/reviews`,
    data: newReview,
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.put('/helpful', (req, res) => {
  console.log(req.body.id);
  const reviewId = req.body.id;
  axios({
    method: 'put',
    url: `${api.api}/reviews/${reviewId}/helpful`,
    params: { review_id: reviewId },
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      console.log(response);
    });
});

app.put('/report', (req, res) => {
  console.log(req.body.id);
  const reviewId = req.body.id;
  axios({
    method: 'put',
    url: `${api.api}/reviews/${reviewId}/report`,
    params: { review_id: reviewId },
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      console.log(response);
    });
});

app.post('/interactions', (req, res) => {
  const clickData = req.query;
  console.log(clickData);
  axios({
    method: 'post',
    url: `${api.api}/interactions`,
    data: clickData,
    headers: {
      Authorization: api.TOKEN,
      // 'Content-Type': 'application/json'
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch(err => console.log(err));
});

//momo server
app.get('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Could\'n find the productss your you are looking for '));
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`${api.api}/products/${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Could\'n find the data your found'));
});

app.get('/products/:id/styles', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}/styles`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Bad'));
});

app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/reviews/?product_id=${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { results } = response.data;
      let sum = 0;
      results.map((result) => {
        sum += result.rating;
        return sum;
      });
      const aveRating = sum / results.length;
      res.status(200).send(aveRating.toString());
    })
    .catch((err) => res.sendStatus(400).send(err));
});

//jin server

app.get('/products/:id/related', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}/related`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

app.get('/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  axios.get(`${api.api}/reviews?product_id=${productId}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    });
});

//anna server
let products = [];
const questions = {};
const answers = {};


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
