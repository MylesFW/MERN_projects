const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema (
    {
        location: {
            type: String,
            required: [true, "{PATH} is required."],
            minLength: [2, "{PATH} must be at least {MINLENGTH} characters."]
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minLength: [5, "{PATH} must be at least {MINLENGTH} characters."]
        },
        // src could be for an img, YT videoi-frame, or a GM i-frame
        src: {
            type: String,
            required: [true, "{PATH} is required."],
        },
        // scrType will is telling what type of media the src is displaying (img, google maps, youtube embed)
        srcType: {
            type: String,
            required: [true, "{PATH} is required."],
        },
        // checkboxes for the season's you'd like to travel
        summer: {
            type: Boolean,
            default: false,
        },
        fall: {
            type: Boolean,
            default: false,
        },
        winter: {
            type: Boolean,
            default: false,
        },
        spring: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

// this is what connects the schema to mongoose and provides the name to the collection
const Destination = mongoose.model("Destination", DestinationSchema);
module.exports = Destination;