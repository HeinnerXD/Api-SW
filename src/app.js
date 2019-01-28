const express = require('express')
const app = express();
const morgan = require('morgan');
const routes = require('./routes/routes')


app.use(routes)
app.use(morgan('dev'));

module.exports = app

