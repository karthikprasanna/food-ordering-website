const mongoose = require('mongoose');
let Order = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number
    },
    vendor: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    review: {
        type: String,
    },
    time: {
        type : Date, default: Date.now 
    },
    status: {
        type: String,
        enum: ['Waiting', 'Placed','PLACED','ACCEPTED','COOKING','READY FOR PICKUP', 'COMPLETED', 'REJECTED', 'Dispatched', 'Cancelled'],
        default: 'Waiting'
    }


});
module.exports = mongoose.model('Order', Order);
