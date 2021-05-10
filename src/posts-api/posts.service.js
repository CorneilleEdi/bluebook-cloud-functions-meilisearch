
const getPosts = async () => {
    return [];

};

const getPost = async (id) => {
    return { id };

};
const addPost = async ({ title, description }) => {
    return { title, description }

};
const updatePost = async (id, data) => {

    return { id, data }

};
const deletePost = async (id) => {
    { id }
};

module.exports = {
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost,
}