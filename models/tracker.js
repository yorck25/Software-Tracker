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
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    info: {
        type: String,
        required: false,
    },
});

const Tracker = mongoose.model('Tracker', trackerSchema);
module.exports = Tracker;