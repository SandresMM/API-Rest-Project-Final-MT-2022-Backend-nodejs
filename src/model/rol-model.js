const mongoose = require('mongoose');

const rolSchema = mongoose.Schema({
    rolName: {
        type: String,
        required : true
    },
    rolDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('rol', rolSchema);