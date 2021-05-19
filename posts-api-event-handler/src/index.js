require('dotenv').config()
const { onPostWritten } = require('./handlers')

exports.postWrittenHandler = onPostWritten

//const { onPostAdded, onPostDeleted, onPostUpdated } = require('./handlers')

// exports.postDeletedHandler = onPostAdded
// exports.postDeletedHandler = onPostDeleted
// exports.postUpdatedHandler = onPostUpdated
