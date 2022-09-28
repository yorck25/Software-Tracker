const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    inventory: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    buy: {
        type: Date,
        required: false,
    },
    warrenty: {
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
});

const Hardware = mongoose.model('Hardware', trackerSchema);
module.exports = Hardware;