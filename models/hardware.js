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
    buy: {
        type: Date,
        required: true,
    },
    warrenty: {
        type: Date,
        required: true,
    },
    info: {
        type: String,
        required: false,
    },
});

const Hardware = mongoose.model('Hardware', trackerSchema);
module.exports = Hardware;