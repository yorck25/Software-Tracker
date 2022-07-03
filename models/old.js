
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oldSchema = new Schema({
    old_id: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    keywords: {
        type: Array,
        required: false,
    },
    snippet: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Old = mongoose.model('Old', oldSchema);
module.exports = Old;