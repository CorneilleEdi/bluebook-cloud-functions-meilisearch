const { onPostAdded } = require('./post-added.handler')
const { onPostDeleted } = require('./post-deleted.handler')
const { onPostUpdated } = require('./post-updated.handler')
const isEmpty = require('lodash/isEmpty')


async function onPostWritten(event) {
    const value = event.value;
    const oldValue = event.oldValue;
    const updateMask = event.updateMask;

    if (!isEmpty(updateMask)) {
        // It is an update event
        await onPostUpdated(event)
    } else if (isEmpty(value) && !isEmpty(oldValue)) {
        // It is an delete event
        await onPostDeleted(event)
    } else if (!isEmpty(value) && isEmpty(oldValue)) {
        // It is an create event
        await onPostAdded(event)
    } else {
        console.error('the event does not match any condition')
    }
}

module.exports = {
    onPostWritten
}