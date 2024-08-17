require('dotenv').config("../.env");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use([
    morgan('dev'),
    cors(),
    express.json(),
])

app.get('/health', (_req, res) => {
    throw new Error("Error on server running");
    res.status(200).json({"message": "Welcome to the server"});
})

app.use((_req, _res, next)=>{
    const error = new Error("Resource not found")
    error.status = 404
    next(error)
})
app.use((error, _req, res, next)=>{
    if (error.status){
       return res.status(error.status).json({"message": error.message})
    }
    res.status(500).json({"message": error.message})
})



module.exports = app;