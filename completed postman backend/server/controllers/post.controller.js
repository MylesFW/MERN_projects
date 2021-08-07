const Post = require("../models/post.model");

module.exports = {
    create: function (req, res) {

        Post.create(req.body)
            .then((post) => {
                res.json(post);
            })
            .catch((error) => {
                res.status(400).json(err);
            });
    },


    getAll(req, res) {
        console.log("getAll method executed")

        Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((error) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)

        Post.findById(req.params.id)
        .then((post) => {
            res.json(post);
        })
        .catch((error) => {
            res.status(400).json(err);
        });
    },


    delete(req, res) {
        console.log("delete method executed", "url params", req.params)

        Post.findByIdAndDelete(req.params.id)
        .then((post) => {
            res.json(post);
        })
        .catch((error) => {
            res.status(400).json(err);
        });
    },


    update(req, res) {
        console.log("update method executed", "url params", req.params)

        Post.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
        .then((updatedPost) => {
            res.json(updatedPost);
        })
        .catch((error) => {
                res.status(400).json(err);
        });
    }
}