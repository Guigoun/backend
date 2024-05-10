var express = require('express');
//caminho path removido
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//routers excluidos

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

module.exports = app;
