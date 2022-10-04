const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: false,
    },
    end: {
        type: Date,
        required: false,
    },
    info: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    memo: {
        type: String,
        required: false,
    },
    user: {
        type: String,
        required: false,
    },
    hardware: {
        type: Number,
        required: false,
    }
});

const Software = mongoose.model('Software', trackerSchema);
module.exports = Software;