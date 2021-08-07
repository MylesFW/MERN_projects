const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema (
    {
        setUp: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        punchLine: {
            type: String,
            required: [true, "{PATH} is required"]
        },
    },
    {timestamp: true}
);
const Joke = mongoose.model("Joke", JokeSchema)
module.exports = Joke