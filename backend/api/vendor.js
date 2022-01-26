var express = require('express');
let Vendor = require('../models/vendor');
const vendorRoutes = express.Router();

// Get all vendors-tested
vendorRoutes.route('/vendor/getall').get(function (req, res) {
    Vendor.find(function (err, vendors) {
        if (err) {
            console.log(err);
        } else {
            res.json(vendors);
        }
    });
});

// Get the names and IDs of all vendors
vendorRoutes.route('/vendor/getnames').get(function (req, res) {
    Vendor.find({}, { vendorname: 1 }, function (err, vendors) {
        if (err) {
            console.log(err);
        } else {
            res.json(vendors);
        }
    });
});

// update the details of the vendor-tested
vendorRoutes.route('/vendor/add').post(function (req, res) {
    let vendor = new Vendor(req.body);
    console.log(vendor)
    vendor
        .save()
        .then(vendor => { res.status(200).json({ 'Status': 'Successful' }) })
        .catch(err => { res.status(400).json({ 'Status': err }); console.log(err) });
});

// Get a vendor by id
vendorRoutes.route('/vendor/:id').get(function (req, res) {
    let id = req.params.id;
    Vendor.findById(id, function (err, vendor) {
        if (err) {
            res.json("")
        } else {
            res.json(vendor.uername);
        }
    });
});


module.exports = vendorRoutes;