const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
var path = require('path');

app.use(cors("*"));

app.use(express.static('./client'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.resolve('./client/search.html'));
});

app.get('/search/results', (req, res) => {
    const searchParams = new URLSearchParams ({
        q: req.query.q,
        location: "Greater London, England, United Kingdom",
        google_domain: "google.co.uk",
        safe: "active",
        engine: "google",
        api_key: "b98a374f23cb725c139705848c61f68d86c2baae3f3f171ea830090db094edc0",
        gl: "uk",
        hl: "en"
    });

    axios.get(`https://serpapi.com/search.json?${searchParams.toString()}`)
    .then(search_response => search_response.data)
    .then(data => res.json(data))
    .catch(console.warn);
});

module.exports = app;