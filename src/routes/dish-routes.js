const express = require('express');
const dishSchema = require('../model/dish-model')

const dishRouter = express.Router();

dishRouter.post('/dishes/add', (req, res) => {
    const dish = new dishSchema(req.body);
    dish
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

dishRouter.get('/dishes', (req, res) => {
    dishSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

dishRouter.get('/dishes/:id', (req, res) => {
    const { id } = req.params;
    dishSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

dishRouter.delete('/dishes/delete/:id', (req, res) => {
    const { id } = req.params;
    dishSchema
        .deleteOne({ _id: id})
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }))
});

dishRouter.put('/dishes/update/:id', (req, res) => {
    const { id } = req.params;
    const { dishName, dishDescription, price, dishState } = req.body;
    dishSchema
        .updateOne({ _id: id }, { $set: { dishName, dishDescription, price, dishState } })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }))
});

module.exports = dishRouter;