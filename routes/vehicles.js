var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;

// Get all
router.get('/', function(req, res) {
  // res.send(vehicles.find());
  res.render('index', {vehiclesList: vehicles.find()});
});

// Add one - go to add page
router.get('/add', function (req, res) {
  res.render('vehicle-add');
});

// Add one
router.post('/add', function(req, res) {
  vehicles.insert({
    vin: parseInt(req.body.vin),
    year: parseInt(req.body.year),
    make: req.body.make,
    model: req.body.model
  });
  // console.log(vehicles.find());
  res.redirect('/');
});

// Edit one - go to detail page
router.get('/edit/:id', function (req, res) {
  res.render('vehicle-detail', {
    vehicle: vehicles.get(parseInt(req.params.id))
  });
});

// Edit one
router.post('/edit', function (req, res) {
  vehicles.findAndUpdate({vin: parseInt(req.body.vin)}, function (data) {
    data.make = req.body.make;
    data.model = req.body.model;
    data.year = parseInt(req.body.year);
  });
  res.redirect('/');
});

// Delete one
router.get('/delete/:id', function (req, res) {
  console.log('req.params.id=', req.params.id);
  vehicles.findAndRemove({vin: parseInt(req.params.id)});
  res.redirect('/');
});

// Get one or many
router.get('/search', function(req, res) {
  let qs = Object.keys(req.query)[0];
  console.log('qs=', qs);
  let q = {
    vin: parseInt(req.query.vin)
  }
  switch (qs) {
    case 'vin':
      q = {
        vin: parseInt(req.query.vin)
      };
      break;
    case 'make':
      q = {
        make: req.query.make
      };
      break;
    default:
      q = null;
      break;
  }
  console.log('q=', q);
  res.send(vehicles.find(q));
});

module.exports = router;
