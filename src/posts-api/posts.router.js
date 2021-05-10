
const { Router } = require('express');
const postsController = require('./posts.controller')

const router = Router()

router.get(
    '/',
    postsController.getPosts
);
router.get(
    '/:id',
    postsController.getPost
);
router.post(
    '/',
    postsController.addPost
);
router.patch(
    '/:id',
    postsController.updatePost
);
router.delete(
    '/:id',
    postsController.deletePost
);

module.exports = router;