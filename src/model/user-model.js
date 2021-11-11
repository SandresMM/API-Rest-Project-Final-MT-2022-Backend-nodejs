const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userFirstName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userAge: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);