const mongoose = require('mongoose');
let Buyer = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactnumber: {
        type: String
    },
    age: {
        type: String
    },
    name: {
        type: String,  
    },
    batchname: {
        type: String
    }
});
module.exports = mongoose.model('Buyer', Buyer);