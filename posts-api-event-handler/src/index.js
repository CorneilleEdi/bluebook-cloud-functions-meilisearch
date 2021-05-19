require('dotenv').config()
const { onPostAdded } = require('./handlers')


exports.postAddedHandler = onPostAdded
