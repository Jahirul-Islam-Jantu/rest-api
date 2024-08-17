const express = require('express');
const app = express();

app.get('/health', (_req, res) => {
    res.status(200).send('OK');
})


app.get('/', (req, res) => {
    res.json("Hello World!");
})

module.exports = app;