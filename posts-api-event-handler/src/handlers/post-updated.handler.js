const config = require('../shared/config');
const searchService = require('../shared/search.service')


async function onPostUpdated(event) {
    const client = await searchService.getMeilisearchClient();
    const index = config.meilisearchPostsIndex

    // Get the added document
    const updatedDocument = event.value;



    // // Add the document to the posts index in meilisearch

    // if (updatedDocument) {
    //     // Get the id, title and description
    //     const postId = updatedDocument.name.split('/posts/')[1]
    //     const postTitle = updatedDocument.fields.title.stringValue;
    //     const postDescription = updatedDocument.fields.description.stringValue;

    //     // Updated the document from the posts index in meilisearch
    //     return await client.index(index).updateDocuments(
    //         [
    //             {
    //                 id: postId,
    //                 title: postTitle,
    //                 description: postDescription
    //             }
    //         ]
    //     )
    // }

    if (updatedDocument) {
        // Get the id, title and description
        const postId = updatedDocument.name.split('/posts/')[1]
        const postTitle = updatedDocument.fields.title.stringValue;
        const postDescription = updatedDocument.fields.description.stringValue;


        try {
            const response = await client.index(index).updateDocuments(
                [
                    {
                        id: postId,
                        title: postTitle,
                        description: postDescription
                    }
                ]
            )
            console.log(`updating document to ${index} with operation : ${response.updateId}`)

        } catch (error) {
            console.error(`updating document to ${index} failed`);
            throw error;
        }
    }

}
module.exports = {
    onPostUpdated
}



// {
//     "oldValue": {
//       "createTime": "2021-05-11T04:18:53.600783Z",
//       "fields": {
//         "description": {
//           "stringValue": "Sed voluptates eos."
//         },
//         "title": {
//           "stringValue": "Rerum cupiditate in vel.
//         }
//       },
//       "name": "projects/bluebook-search/databases/(default)/documents/posts/ksP4335m2bhSzNYZ5YEG",
//       "updateTime": "2021-05-11T04:21:16.351247Z"
//     },
//     "updateMask": { "fieldPaths": ["title", "description"] },
//     "value": {
//       "createTime": "2021-05-11T04:18:53.600783Z",
//       "fields": {
//         "description": {
//           "stringValue": "Vero reiciendis et.
//         },
//         "title": {
//           "stringValue": "Et corrupti.
//         }
//       },
//       "name": "projects/bluebook-search/databases/(default)/documents/posts/ksP4335m2bhSzNYZ5YEG",
//       "updateTime": "2021-05-11T04:21:16.351247Z"
//     }
//   }