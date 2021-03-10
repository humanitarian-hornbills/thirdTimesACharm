const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  const { qId, productId } = req.body;
  console.log(qId, productId);
  const pQuestions = {};
  axios.put(`${api.api}/qa/questions/${qId}/helpful`, {
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
