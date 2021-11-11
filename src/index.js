const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//Importing routes
const dishCategoryRoutes = require('./routes/dish-category-routes');
const dishRoutes = require('./routes/dish-routes');
const orderDetailsRoutes = require('./routes/order-details-routes');
const orderRoutes = require('./routes/order-routes');
const rolRoutes = require('./routes/rol-routes');
const tableRoutes = require('./routes/table-routes');
const userRoutes = require('./routes/user-routes');

//Database connection
mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(db => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

//Middlewares
app.use(express.json());
app.use('/api', dishCategoryRoutes);
app.use('/api', dishRoutes);
app.use('/api', orderDetailsRoutes);
app.use('/api', orderRoutes);
app.use('/api', rolRoutes);
app.use('/api', tableRoutes);
app.use('/api', userRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('Wellcome to my API.');
});

//Starting server
app.listen(port, () => console.log(`Server on port ${port}`));