const express = require('express');
const userSchema = require('../model/user-model');

const userRouter = express.Router();

userRouter.post('/users/add', (req, res) => {
    const user = new userSchema(req.body);
    user
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

userRouter.get('/users', (req, res) => {
    userSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

userRouter.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

userRouter.delete('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id})
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

userRouter.put('/users/update/:id', (req, res) => {
    const { id } = req.params;
    const { userFirstName, userLastName, userAge, userEmail, userPassword } = req.body;
    userSchema
        .updateOne({ _id: id}, { $set: { userFirstName, userLastName, userAge, userEmail, userPassword } })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = userRouter;