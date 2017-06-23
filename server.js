var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var vehicles = require('./db/config').vehicles.data;
var port = process.env.PORT || 8000;

// console.log(vehicles);

var app = express();

var indexRoutes = require('./routes/index');
var vehiclesRoutes = require('./routes/vehicles');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(cors());

app.use('/', indexRoutes);
app.use('/vehicles', vehiclesRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, function() {
  console.log('listening on: ', port);
})
