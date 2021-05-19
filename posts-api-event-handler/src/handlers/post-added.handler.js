const config = require('../shared/config');
const searchService = require('../shared/search.service')

// {
//     "oldValue": {},
//     "updateMask": {},
//     "value": {
//       "createTime": "2021-05-11T04:18:53.600783Z",
//       "fields": {
//         "description": {
//           "stringValue": "Sed voluptates eos."
//         },
//         "title": {
//           "stringValue": "Rerum cupiditate in vel."
//         }
//       },
//       "name": "projects/bluebook-search/databases/(default)/documents/posts/ksP4335m2bhSzNYZ5YEG",
//       "updateTime": "2021-05-11T04:18:53.600783Z"
//     }
// }


async function onPostAdded(event) {
    const client = await searchService.getMeilisearchClient();
    const index = config.meilisearchPostsIndex

    // Get the added document
    const addedDocument = event.value;

    // Get the id, title and description
    const postId = addedDocument.name.split('/posts/')[1]
    const postTitle = addedDocument.fields.title.stringValue;
    const postDescription = addedDocument.fields.description.stringValue;

    // Add the document to the posts index in meilisearch
    return await client.index(index).addDocuments(
        [
            {
                id: postId,
                title: postTitle,
                description: postDescription
            }
        ]
    )

    // try {
    //     const response = await client.index(index).addDocuments(
    //         [
    //             {
    //                 id: postId,
    //                 title: postTitle,
    //                 description: postDescription
    //             }
    //         ]
    //     )
    //     console.log(`Adding document to ${index} with updateId : ${response.updateId}`)

    // } catch (error) {
    //     console.error(`Adding document to ${index} failed`);
    //     throw error;
    // }
}
module.exports = {
    onPostAdded
}