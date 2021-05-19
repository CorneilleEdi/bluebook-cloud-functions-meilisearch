require('dotenv').config()
const Firestore = require('@google-cloud/firestore');
const config = require('./shared/config');
const searchService = require('./shared/search.service');


const firestore = new Firestore();


// exports.postsApiFirestoreEventHandler = (event) => {
//     console.log(`Value  ${JSON.stringify(event)}`);
// }

searchService.getMeilisearchClient().then(() => console.log("Meiliseach connected"))