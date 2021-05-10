const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./posts.router');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postsRouter)

module.exports = app