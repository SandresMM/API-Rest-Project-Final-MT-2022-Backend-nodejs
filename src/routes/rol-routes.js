const express = require('express');
const rolSchema = require('../model/rol-model')

const rolRouter = express.Router();

rolRouter.post('/roles/add', (req, res) => {
    const rol = new rolSchema(req.body);
    rol
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

rolRouter.get('/roles', async (req, res) => {
    rolSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

rolRouter.get('/roles/:id', (req, res) => {
    const { id } = req.params;
    rolSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

rolRouter.delete('/roles/delete/:id', (req, res) => {
    const { id } = req.params;
    rolSchema
        .deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

rolRouter.put('/roles/update/:id', (req, res) => {
    const { id } = req.params;
    const { rolName, rolDescription} = req.body;
    rolSchema
        .updateOne({ _id: id }, {$set: { rolName, rolDescription }})
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = rolRouter;