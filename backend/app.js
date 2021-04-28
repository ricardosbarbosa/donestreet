var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobs');
var searchesRouter = require('./routes/searches');

var app = express();

// app.set('trust proxy', true)
app.enable('trust proxy')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);
app.use('/searches', searchesRouter);

module.exports = app;
