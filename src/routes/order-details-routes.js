const express = require('express');
const orderDetailsSchema = require('../model/order-details-model');

const orderDetailsRouter = express.Router();

orderDetailsRouter.post('/order-details/add', (req, res) => {
    const orderDetails = new orderDetailsSchema(req.body);
    orderDetails
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderDetailsRouter.get('/order-details', (req, res) => {
    orderDetailsSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderDetailsRouter.get('/order-details/:id', (req, res) => {
    const { id } = req.params;
    orderDetailsSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderDetailsRouter.delete('/order-details/delete/:id', (req, res) => {
    const { id } = req.params;
    orderDetailsSchema
        .deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

orderDetailsRouter.put('/order-details/update/:id', (req, res) => {
    const { id } = req.params;
    const { unitPrice, quantity, discount } = req.body;
    orderDetailsSchema
        .updateOne({ _id: id }, { $set: { unitPrice, quantity, discount } })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = orderDetailsRouter;