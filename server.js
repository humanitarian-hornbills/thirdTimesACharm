const express = require('express');
const axios = require('axios');
const path = require('path');
const api = require('./config.js');

const app = express();
const port = 3000;

let products = [];
const questions = {};
const answers = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

// agustin server
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
  axios({
    method: 'post',
    url: `${api.api}/interactions`,
    data: clickData,
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      console.log(response.config.data);
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

// momo server
app.get('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      products = data;
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

// jin server

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

// anna server

app.get('/questions/:id', (req, res) => {
  const { id } = req.params;
  const pQuestions = {};
  if (questions[id] === undefined) {
    axios.get(`${api.api}/qa/questions?product_id=${id}`, {
      headers: {
        Authorization: api.TOKEN,
      },
    })
      .then((response) => {
        questions[id] = response.data;
        pQuestions[id] = questions[id];
        res.send(pQuestions);
      })
      .catch(() => res.sendStatus(404));
  } else {
    pQuestions[id] = questions[id];
    res.send(pQuestions);
  }
});

app.get('/answers/:questionId', (req, res) => {
  const { questionId } = req.params;
  const qAnswers = {};
  if (!answers[questionId]) {
    axios.get(`${api.api}/qa/questions/${questionId}/answers`, {
      headers: {
        Authorization: api.TOKEN,
      },
    })
      .then((response) => {
        answers[questionId] = response.data;
        qAnswers[questionId] = answers[questionId];
        res.send(qAnswers[questionId]);
      })
      .catch(() => res.sendStatus(404));
  } else {
    qAnswers[questionId] = answers[questionId];
    res.send(qAnswers[questionId]);
  }
});

app.get('/q', (req, res) => {
  res.send(questions);
});

app.post('/question', (req, res) => {
  // req should be sent with content-type: application/json
  // {
  //     "body": "Why isn't this posting....",
  //     "name": "Mathilda",
  //     "email": "lady@me.com",
  //     "product_id": 14932
  // }
  const id = req.body.product_id;
  const bodyData = req.body;
  const pQuestions = {};

  axios.post(`${api.api}/qa/questions`, bodyData, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions?product_id=${id}`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          questions[id] = response.data;
          pQuestions[id] = questions[id];
          res.send(pQuestions);
        })
        .catch(() => res.sendStatus(404));
    })
    .catch(() => res.sendStatus(404));
});

app.post('/answer/:id', (req, res) => {
  // req should be sent with content-type: application/json
  // {
  //     "body": "Why isn't this posting....",
  //     "name": "Mathilda",
  //     "email": "lady@me.com",
  //     "photos": []
  // }
  const { id } = req.params;
  const bodyData = req.body;
  const qAnswers = {};

  axios.post(`${api.api}/qa/questions/${id}/answers`, bodyData, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions/${id}/answers`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          answers[id] = response.data;
          qAnswers[id] = answers[id];
          res.send(qAnswers[id]);
        })
        .catch(() => res.send('404'));
    })
    .catch(() => res.send('405'));
});

app.put('/helpfulQ', (req, res) => {
  // expects the following body format:
  //   {
  //     "qId": 153126,
  //     "productId": 14932

  // }
  const { qId, productId } = req.body;
  const pQuestions = {};
  axios.put(`${api.api}/qa/questions/${qId}/helpful`, {}, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions?product_id=${productId}`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          questions[productId] = response.data;
          pQuestions[productId] = questions[productId];
          res.send(pQuestions);
        })
        .catch(() => res.sendStatus(404));
    })
    .catch(() => res.sendStatus(404));
});

app.put('/helpfulAns', (req, res) => {
  // expects the following body format:
  //   {
  //     "ansId": 153126,
  //     "qId": 14932

  // }
  const { ansId, qId } = req.body;
  const qAnswers = {};
  axios.put(`${api.api}/qa/answers/${ansId}/helpful`, {}, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions/${qId}/answers`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          answers[qId] = response.data;
          qAnswers[qId] = answers[qId];
          res.send(qAnswers[qId]);
        })
        .catch(() => res.sendStatus(404));
    })
    .catch(() => res.sendStatus(404));
});

app.put('/reportQ', (req, res) => {
  // expects the following body format:
  //   {
  //     "qId": 153126,
  //     "productId": 14932

  // }
  const { qId, productId } = req.body;
  const pQuestions = {};
  axios.put(`${api.api}/qa/questions/${qId}/report`, {}, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions?product_id=${productId}`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          questions[productId] = response.data;
          pQuestions[productId] = questions[productId];
          res.send(pQuestions);
        })
        .catch(() => res.sendStatus(404));
    })
    .catch(() => res.sendStatus(404));
});

app.put('/reportAns', (req, res) => {
  // expects the following body format:
  //   {
  //     "ansId": 153126,
  //     "qId": 14932

  // }
  const { ansId, qId } = req.body;
  const qAnswers = {};
  axios.put(`${api.api}/qa/answers/${ansId}/report`, {}, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then(() => {
      axios.get(`${api.api}/qa/questions/${qId}/answers`, {
        headers: {
          Authorization: api.TOKEN,
        },
      })
        .then((response) => {
          answers[qId] = response.data;
          qAnswers[qId] = answers[qId];
          res.send(qAnswers[qId]);
        })
        .catch(() => res.sendStatus(404));
    })
    .catch(() => res.sendStatus(404));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
