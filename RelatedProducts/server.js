const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const api = require('./config');

app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));

// id: 14034
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

app.get('/products/:id/styles', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}/styles`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

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

// get all products
app.get('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
