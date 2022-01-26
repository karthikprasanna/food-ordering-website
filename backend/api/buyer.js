var express = require('express');
let Buyer = require('../models/buyer');
const buyerRoutes = express.Router();

// Get all buyers-tested
buyerRoutes.route('/buyer/getall').get(function (req, res) {
    Buyer.find(function (err, buyers) {
        if (err) {
            console.log(err);
        } else {
            res.json(buyers);
        }
    });
});

// Get the names and IDs of all buyers
buyerRoutes.route('/buyer/getnames').get(function (req, res) {
    Buyer.find({}, { username: 1 }, function (err, buyers) {
        if (err) {
            console.log(err);
        } else {
            res.json(buyers);
        }
    });
});

// update the details of the buyer
buyerRoutes.route('/buyer/update').post(function (req, res) {
    var _id = req.body._id;

    let buyer = new Buyer(req.body);
    console.log(buyer)
    Buyer.findByIdAndUpdate(_id, buyer, { new: true }, function(
        err,
        buyer
      ) {
        if (err) {
          console.log("err", err);
          res.status(500).send(err);
        } else {
          console.log("success");
          res.send(buyer);
        }
      });
    });
// Get a buyer by id
buyerRoutes.route('/buyer/:id').get(function (req, res) {
    let id = req.params.id;
    Buyer.findById(id, function (err, buyer) {
        if (err) {
            res.json("")
        } else {
            res.json(buyer.uername);
        }
    });
});


module.exports = buyerRoutes;