const Joke = require("../models/jokes.model");


module.exports = {

// create a joke
    create: function (request, response) {
        console.log("create method executed");
        Joke.create(request.body)
            .then((joke) => {
                response.json(joke);
            })
            .catch((error) => {
                response.json(error);
            });
    },

// get all jokes
    getAll(req, res) {
        console.log("getAll method executed")
        Joke.find()
        .then((jokes) => {
                console.log("getAll .then completed")
            res.json(jokes);
        })
        .catch((error) => {
            res.json(error);
        });
    },

// get only a single joke
    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)
        Joke.findById(req.params.id)
            .then((joke) => {
                console.log("getOne .then completed")
                res.json(joke);
            })
            .catch((error) => {
                res.json(error);
            });
    },

// get one random joke
    getRandom(req, res) {
        console.log("getRandom method executed", "url params", req.params)
        Joke.find()
            .then((jokes) => {
                    console.log("getRandom .then completed")
                res.json(jokes[Math.floor(Math.random()*jokes.length)]);
            })
            .catch((error) => {
                res.json(error);
            });
    },

// update a joke
    update(req, res) {
        console.log("update method executed", "url params", req.params)
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
        .then((updatedJoke) => {
            console.log("update .then completed")
        res.json(updatedJoke);
        })
        .catch((error) => {
            res.json(error);
        });
    },

// delete a joke
    delete(req, res) {
        console.log("delete method executed", "url params", req.params)
        Joke.findByIdAndDelete(req.params.id)
            .then((joke) => {
                console.log("delete .then completed")
                res.json(joke);
            })
            .catch((error) => {
                res.json(error);
            });
        }
    }
