const mongoose = require('mongoose');
let Vendor = new mongoose.Schema({
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
    shopname: {
        type: String,
        unique: true
    },
    managername: {
        type: String,  
    },
    time: {
        type: String
    }
});
module.exports = mongoose.model('Vendor', Vendor);