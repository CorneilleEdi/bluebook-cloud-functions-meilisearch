const { onPostAdded } = require('./post-added.handler')
const { onPostDeleted } = require('./post-deleted.handler')
const { onPostUpdated } = require('./post-updated.handler')

module.exports = {
    onPostAdded,
    onPostDeleted,
    onPostUpdated
}