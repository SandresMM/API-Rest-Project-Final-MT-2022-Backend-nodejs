const express = require('express');
const orderSchema = require('../model/order-model');

const orderRouter = express.Router();

orderRouter.post('/orders/add', (req, res) => {
    const order = new orderSchema(req.body);
    order
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderRouter.get('/orders', (req, res) => {
    orderSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderRouter.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    orderSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderRouter.delete('/orders/delete/:id', (req, res) => {
    const { id } = req.params;
    orderSchema
        .deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderRouter.put('/orders/update/:id', (req, res) => {
    const { id } = req.params;
    const { orderDate } = req.body;
    orderSchema
        .updateOne({ _id: id}, { $set: { orderDate } })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
})

module.exports = orderRouter;