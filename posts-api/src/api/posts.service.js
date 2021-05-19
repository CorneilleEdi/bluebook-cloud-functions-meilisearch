const Firestore = require('@google-cloud/firestore');
const PostNotFoundException = require('./exceptions/post-not-found.exception');
const searchService = require('./shared/search.service')
const config = require('./shared/config')
const db = new Firestore()
const postsCollection = db.collection('posts')


const searchPosts = async (key) => {
    const client = await searchService.getMeilisearchClient();
    const index = config.meilisearchPostsIndex;

    return client.index(index).search(key);
};


const getPosts = async () => {
    const snapshot = await postsCollection.get();

    return snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    });
};

const getPost = async (id) => {
    const snapshot = await postsCollection.doc(id).get();

    if (!snapshot.exists) {
        throw new PostNotFoundException(id);
    }
    const result = { id: snapshot.id, ...snapshot.data() };
    return result;

};
const addPost = async ({ title, description }) => {
    const res = await postsCollection.add({ title, description });

    return {
        id: res.id,
        ...{ title, description },
    };

};
const updatePost = async (id, data) => {
    const snapshot = await postsCollection.doc(id).get();

    if (!snapshot.exists) {
        throw new PostNotFoundException(id);
    }


    Object.keys(data).forEach(key => data[key] === undefined && delete data[key])

    await postsCollection.doc(id).set({ ...snapshot.data(), ...data });


    return {
        id,
        ...snapshot.data(),
        ...data,
    };

};
const deletePost = async (id) => {
    const snapshot = await postsCollection.doc(id).get();

    if (!snapshot.exists) {
        throw new PostNotFoundException(id);
    }

    await postsCollection.doc(id).delete();

    return { message: `document ${id} is deleted` };

};

module.exports = {
    searchPosts,
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost,
}