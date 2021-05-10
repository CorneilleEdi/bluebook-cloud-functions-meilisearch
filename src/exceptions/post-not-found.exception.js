const httpStatus = require("http-status");
const HttpException = require("./http.exception");

class PostNotFoundException extends HttpException {
    constructor(id) {
        super(httpStatus.NOT_FOUND, `Post with id ${id} not found`);
    }
}

module.exports = PostNotFoundException;