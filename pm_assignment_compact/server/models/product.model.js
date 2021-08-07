const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema ({
        title: {
            type: String,
            required: [true, "product name is required."],
            minlength: [2, "product name must be at least {MINLENGTH} characters."],
        },
        price: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH} characters."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
        },
    },
    { timestamps: true }
);

// this is what connects the schema to mongoose and provides the name to the collection
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;