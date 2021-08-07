const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema ({
        name: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },
    },
    { timestamps: true }
);

// this is what connects the schema to mongoose and provides the name to the collection
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;