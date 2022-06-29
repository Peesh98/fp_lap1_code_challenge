const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('../client'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../client/index.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/../client/search.html');
});

app.get('/searchResults', (req, res) => {
    const searchParams = new URLSearchParams ({
        q: "dogs",
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
    .catch(console.warn)
    // getSearchResults()

    // async function getSearchResults () {
    //     try {
    //         const search_response = await fetch(`https://serpapi.com/search.json?${searchParams.toString()}`);
    //         const data = await search_response.data;
    //         res.json(data);
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };
    
});

module.exports = app;