const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const middlewares = require('./middlewares');
const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());

routes(app);
middlewares(app);

module.exports = app;
