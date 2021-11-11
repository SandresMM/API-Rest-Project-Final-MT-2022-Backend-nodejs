const express = require('express');
const dishCategorySchema = require('../model/dish-category-model');

const dishCategoryRouter = express.Router();

dishCategoryRouter.post('/dish-categories/add', (req, res) => {
    const dishCategory = new dishCategorySchema(req.body);
    dishCategory
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
    
   /*  try {
        const dishCategory = await new dishCategorySchema(req.body).save();
        res.json(dishCategory);
    } catch (error) {
        res.json(error);
    } */
});

dishCategoryRouter.get('/dish-categories', (req, res) => {
    dishCategorySchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }))

    /* try {
        const dishCategories = await dishCategorySchema.find();
        res.json(dishCategories);
    } catch (error) {
        res.json({ message: error });
    } */
})

dishCategoryRouter.get('/dish-categories/:id', (req, res) => {
    const { id } = req.params;
    dishCategorySchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }))

    /* try {
        const { id } = req.params;
        const dishCategory = await dishCategorySchema.findById(id);
        res.json(dishCategory);
    } catch (error) {
        res.json(error);
    } */
});

dishCategoryRouter.delete('/dish-categories/delete/:id', (req, res) => {
    const { id } = req.params;
    dishCategorySchema
        .deleteOne( {_id: id })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error}));
    
    /* try {
        const { id } = req.params;
        const dishCategory = await dishCategorySchema.deleteOne( {_id: id });
        res.json(dishCategory);
    } catch (error) {
        res.json(error);
    } */
});

dishCategoryRouter.put('/dish-categories/update/:id', (req, res) => {
    const { id } = req.params;
    const { categoryName, categoryDescription } = req.body;
    dishCategorySchema
        .updateOne({ _id: id }, { $set: { categoryName, categoryDescription } })
        .then(data => res.json(data))
        .catch(error => res.json(error));
    
    /* try {
        const { id } = req.params;
        const { categoryName, categoryDescription } = req.body;
        const dishCategory = await dishCategorySchema.updateOne({ _id: id }, { $set: { categoryName, categoryDescription } });
        res.json(dishCategory);

    } catch (error) {
        res.json(error);
    } */

    /* try {
        const { id } = req.params;
        const dishCategory = await dishCategorySchema.updateOne({ _id: id }, req.body);
        res.json(dishCategory);

    } catch (error) {
        res.json(error);
    } */
});

module.exports = dishCategoryRouter;