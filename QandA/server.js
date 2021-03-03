const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let products = [];
const questions = {};
const answers = {};

app.get('/products', (req, res) => {
  if (products.length !== 0) {
    res.send(products);
  } else {
    res.sendStatus(500);
  }
});

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

// app.post('/questions/:id', (req, res) => {
//   // should receive body parameters body,
// name, email, id and send same fields into api.api request data
//   // req.body = {body, name, email, id}
//   const { id } = req.params;
//   axios.post(`${api.api}/qa/questions?product_id=${id}`, {data: req.body}, {
//     headers: {
//       Authorization: api.TOKEN,
//     },
//   })
//     .then((response) => {
//       questions[id] = response.data.results;
//       res.send(questions);
//     })
//     .catch(() => res.sendStatus(404));
// });

app.get('/q', (req, res) => {
  res.send(questions);
});

app.listen(PORT, () => {
  // console.log(`Server listening in on port ${PORT}`);
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      products = response.data;
    })
    .catch((err) => console.log(err));
});
