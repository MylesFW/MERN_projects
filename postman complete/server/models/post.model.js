const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema ({
        title: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
        },
        primaryCategory: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        secondaryCategory: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        imgURL: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        likeCount: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

// this is what connects the schema to mongoose and provides the name to the collection
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;