const catchAsync = require('./shared/utils/catchAsync');
const postsService = require('./posts.service');

const getPosts = catchAsync(async (req, res) => {
    const key = req.query.q

    let posts = [];

    if (key) {
        const result = await postsService.searchPosts(key);
        posts = result.hits;
    } else {
        posts = await postsService.getPosts();
    }

    return res.status(200).send(posts);
});

const getPost = catchAsync(async (req, res) => {
    const post = await postsService.getPost(req.params['id']);
    return res.status(200).send(post);
});

const addPost = catchAsync(async (req, res) => {
    const { title, description } = req.body;
    const post = await postsService.addPost({ title, description });
    return res.status(201).send(post);
});

const updatePost = catchAsync(async (req, res) => {
    const { title, description } = req.body;
    const post = await postsService.updatePost(req.params['id'], { title, description });
    return res.status(200).send(post);

});

const deletePost = catchAsync(async (req, res) => {
    const post = await postsService.deletePost(req.params['id']);
    return res.status(200).send(post);
});

module.exports = {
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost,
}