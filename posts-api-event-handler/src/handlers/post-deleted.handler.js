const config = require('../shared/config');
const searchService = require('../shared/search.service')

// {
//     "oldValue": {
//       "createTime": "2021-05-10T23:39:42.078538Z",
//       "fields": {
//         "description": {
//           "stringValue": "Excepturi numquam non ."
//         },
//         "title": {
//           "stringValue": "Molestiae libero est ."
//         }
//       },
//       "name": "projects/bluebook-search/databases/(default)/documents/posts/0YDqMfnjcdhXPUIWDHsc",
//       "updateTime": "2021-05-11T04:28:56.508079Z"
//     },
//     "updateMask": {},
//     "value": {}
//   }





async function onPostDeleted(event) {
    const client = await searchService.getMeilisearchClient();
    const index = config.meilisearchPostsIndex

    // Get the added document
    const deletedDocument = event.oldValue;

    // if (deletedDocument) {
    //     // Get the id
    //     const postId = deletedDocument.name.split('/posts/')[1]

    //     // Delete the document from the posts index in meilisearch
    //     return await client.index(index).deleteDocument(
    //         postId,

    //     )
    // }

    if (deletedDocument) {
        // Get the id
        const postId = deletedDocument.name.split('/posts/')[1]
        try {
            const response = await client.index(index).deleteDocument(
                postId,

            )
            console.log(`deleting document to ${index} with operation : ${response.updateId}`)

        } catch (error) {
            console.error(`deleting document to ${index} failed`);
            throw error;
        }
    }

}
module.exports = {
    onPostDeleted
}