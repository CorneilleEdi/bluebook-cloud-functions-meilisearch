
const httpStatus = require('http-status');
const HttpException = require('../exceptions/http.exception');

const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof HttpException)) {
        const statusCode =
            error.statusCode
        const message = error.message || httpStatus[statusCode];
        error = new HttpException(statusCode, message, false, err.stack);
    }
    next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;

    statusCode = statusCode ?? httpStatus.INTERNAL_SERVER_ERROR;
    message = message ?? httpStatus[httpStatus.INTERNAL_SERVER_ERROR];


    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message
    };



    res.status(statusCode).send(response);
};

module.exports = {
    errorConverter,
    errorHandler,
};