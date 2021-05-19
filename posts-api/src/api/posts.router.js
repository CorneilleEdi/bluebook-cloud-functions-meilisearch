
const { Router } = require('express');
const postsController = require('./posts.controller')
const postsValidation = require("./posts.validation")
const validate = require('../middlewares/validation.middleware')

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
    validate(postsValidation.addPost),
    postsController.addPost
);
router.patch(
    '/:id',
    validate(postsValidation.updatePost),
    postsController.updatePost
);
router.delete(
    '/:id',
    postsController.deletePost
);

module.exports = router;