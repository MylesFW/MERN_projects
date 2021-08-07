const Destination = require("../models/desination.model");
const Desination = require("../models/desination.model");

// exporting an object consisting of methods
module.exports = {
    //long-form = key: value format
    create: function (request, response) {
        console.log("create method executed");
        Destination.create(request.body)
            .then((destination) => {
                //new db model instance
                response.json(destination);
            })
            .catch((error) => {
                response.json(error);
            });
    },


    // short-hand key value pair
        // key == name of the function
        // value == is the function
    getAll(req, res) {
        console.log("getAll method executed")
        Destination.find() // will find all the destinations (plural for all destination(s))
        .then((destinations) => {
                console.log("getAll .then completed")
            res.json(destinations);
        })
        .catch((error) => {
            res.json(error);
        });
    },


    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)
        Destination.findById(req.params.id)
            .then((destination) => {
                    console.log("getOne .then completed")
                res.json(destination);
            })
            .catch((error) => {
                res.json(error);
            });
    },


    delete(req, res) {
        console.log("delete method executed", "url params", req.params)
        Destination.findByIdAndDelete(req.params.id)
        .then((destination) => {
            console.log("delete .then completed")
        res.json(destination);
    })
    .catch((error) => {
        res.json(error);
    });
    },


    update(req, res) {
        console.log("update method executed", "url params", req.params)

        Destination.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
            .then((updatedDestination) => {
                console.log("update .then completed")
            res.json(updatedDestination);
            })
            .catch((error) => {
                res.json(error);
            });

    }
}