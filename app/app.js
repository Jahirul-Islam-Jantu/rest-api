require('dotenv').config("../.env");
const express = require('express');
const middleware = require('../middleware/middleware');
const router = require("../routes/routes");
const {notFound, serverError} = require("../errors/errors")




const app = express();

app.use(middleware)
app.use(router)
app.use(notFound)
app.use(serverError)





module.exports = app;