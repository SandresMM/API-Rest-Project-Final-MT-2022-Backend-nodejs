const mongoose = require('mongoose');

const orderDetailsSchema = mongoose.Schema({
    unitPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('orderDetail', orderDetailsSchema);