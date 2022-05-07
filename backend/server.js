const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established succesfully.");
})
// API endpoints

var userRoutes = require('./api/users');
var productRoutes = require('./api/product');
var orderRoutes = require('./api/order')



app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', orderRoutes);


app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});

