
const Joi = require('joi');

const addPost = {
    body: Joi.object().keys({
        title: Joi.string().required().min(6),
        description: Joi.string().required().min(6)
    }),
};

const updatePost = {
    params: Joi.object().keys({
        id: Joi.required(),
    }),
    body: Joi.object().keys({
        title: Joi.string().optional().min(6),
        description: Joi.string().optional().min(6)
    }).min(1),
};

module.exports = {
    addPost,
    updatePost
}
