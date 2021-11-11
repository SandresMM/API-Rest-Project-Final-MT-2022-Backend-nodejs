const express = require('express');
const tableSchema = require('../model/table-model');

const tableRouter = express.Router();

tableRouter.post('/tables/add', (req, res) => {
    const table = new tableSchema(req.body);
    table
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

tableRouter.get('/tables', (req, res) => {
    tableSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

tableRouter.get('/tables/:id', (req, res) => {
    const { id } = req.params;
    tableSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

tableRouter.delete('/tables/delete/:id', (req, res) => {
    const { id } = req.params;
    tableSchema
        .deleteOne({ _id: id})
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

tableRouter.put('/tables/update/:id', (req, res) => {
    const { id } = req.params;
    const { tableNumber, qr, tableChairs } = req.body;
    tableSchema
        .updateOne({ _id: id }, { $set: { tableNumber, qr, tableChairs } })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = tableRouter;