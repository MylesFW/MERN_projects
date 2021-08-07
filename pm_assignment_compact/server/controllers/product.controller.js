const Product = require("../models/product.model");

module.exports = {
    create: function (req, res) {

        Product.create(req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((error) => {
                console.log('oopsssssssssss')
                res.status(400).json(error);
            });
    },


    getAll(req, res) {
        console.log("getAll method executed")

        Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)

        Product.findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    },


    delete(req, res) {
        console.log("delete method executed", "url params", req.params)

        Product.findByIdAndDelete(req.params.id)
        .then((product) => {
        res.json(product);
    })
    .catch((error) => {
        res.status(400).json(error);
    });
    },


    update(req, res) {
        console.log("update method executed", "url params", req.params)

        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
            .then((updatedProduct) => {
            res.json(updatedProduct);
            })
            .catch((error) => {
                res.status(400).json(err);
            });
    }
}