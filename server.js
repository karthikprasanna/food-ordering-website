const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
require("dotenv").config()
const path = require("path")
const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))
// Connection to mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});

