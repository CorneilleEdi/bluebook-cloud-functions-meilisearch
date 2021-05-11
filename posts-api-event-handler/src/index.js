const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore();


exports.postsApiFirestoreEventHandler = (event) => {
    console.log(`Value  ${JSON.stringify(event)}`);
}