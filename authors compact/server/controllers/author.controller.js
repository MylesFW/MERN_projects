const Author = require("../models/author.model");

module.exports = {
    create(req, res) {

        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err);
            });
    },


    getAll(req, res) {
        console.log("getAll method executed")

        Author.find()
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)

        Author.findById(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },


    delete(req, res) {
        console.log("delete method executed", "url params", req.params)

        Author.findByIdAndDelete(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },


    update(req, res) {
        console.log("update method executed", "url params", req.params)

        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
        .then((updatedPost) => {
            res.json(updatedPost);
        })
        .catch((err) => {
                res.status(400).json(err);
        });
    }
}