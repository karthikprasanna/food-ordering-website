const mongoose = require('mongoose');
let User = new mongoose.Schema({
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
    address: {
        type: String
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Vendor', 'Customer']
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
    batch: {
        type: String,
        enum: ['UG1', 'UG2', 'UG3', 'UG4', 'UG5']
    },
    shopname: {
        type: String,
        unique: true
    },
    managername: {
        type: String,  
    },
    time: {
        type: String
    },
    wallet: {
        type: Number
    }

});
module.exports = mongoose.model('User', User);