const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    dishName:{
        type: String,
        required: true
    },
    dishDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dishState: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('dish', dishSchema);