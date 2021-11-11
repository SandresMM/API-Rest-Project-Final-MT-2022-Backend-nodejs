const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true
    },
    qr: {
        type: String,
        required: true
    },
    tableChairs: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('table', tableSchema);