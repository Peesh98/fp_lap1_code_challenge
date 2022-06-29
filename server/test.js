const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const searchParams = new URLSearchParams ({
    q: "pokemon",
    location: "Greater London, England, United Kingdom",
    google_domain: "google.co.uk",
    safe: "active",
    engine: "google",
    api_key: "b98a374f23cb725c139705848c61f68d86c2baae3f3f171ea830090db094edc0",
    gl: "uk",
    hl: "en"
});

async function getSearchResults(e) {
    e.preventDefault();
    try {
        const resp = await fetch(`https://serpapi.com/search.json?${searchParams.toString()}`);
        const data = await resp.data;
        res.json(data);
    } catch (err) {
        console.log("Unable to perform this search!")
    };
};

getSearchResults
