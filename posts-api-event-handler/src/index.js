require('dotenv').config()
const { onPostAdded, onPostDeleted, onPostUpdated } = require('./handlers')


exports.postAddedHandler = onPostAdded
exports.postDeletedHandler = onPostDeleted
exports.postUpdatedHandler = onPostUpdated
