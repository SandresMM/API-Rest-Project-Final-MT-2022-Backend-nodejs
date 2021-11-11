const mongoose = require('mongoose');

const dishCategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('dishCategory', dishCategorySchema);