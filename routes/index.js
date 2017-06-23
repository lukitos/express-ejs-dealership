var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;

router.get('/', function (req, res) {
  // res.send(vehicles.find());
  res.render('index', {
    vehiclesList: vehicles.find()
  });
});

module.exports = router;
