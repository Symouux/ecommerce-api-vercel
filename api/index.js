const express = require('express');
const cors = require('cors');
const app = express();
const users = require('../jsons/ProductData.json'); 

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

app.get('/ProductData', (req, res) => {
  res.status(200).json(users);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app; // مهم جدا لـ Vercel