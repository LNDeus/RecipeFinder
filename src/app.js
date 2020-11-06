const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const middlewares = require('./app/middlewares');
const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());

middlewares(app);

module.exports = app;
