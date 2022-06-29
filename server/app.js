const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('This is the API server for the futureproof Lap 1 Coding Challenge'));

module.exports = app;