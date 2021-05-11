const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const httpStatus = require('http-status');
const postsRouter = require('./posts.router');
const { errorHandler, errorConverter } = require('../middlewares/error.middleware');
const HttpException = require('../exceptions/http.exception');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postsRouter)



app.use((req, res, next) => {
    next(new HttpException(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter)
app.use(errorHandler)

module.exports = app