var express = require('express');

var mongoose = require('MONGODB_URL');
var dotenv = require('.env') 

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/users', usersRouter);

module.exports = app;
