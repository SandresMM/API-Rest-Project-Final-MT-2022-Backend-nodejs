const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('order', orderSchema);