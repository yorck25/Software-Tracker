const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    category: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
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
});

const Tracker = mongoose.model('Tracker', trackerSchema);
module.exports = Tracker;