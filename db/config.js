var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicles = db.addCollection('vehicles');

vehicles.insert([
  {
    vin: 1,
    year: 2013,
    make: "Honda",
    model: "Accord LX"
  },
  {
    vin: 2,
    year: 2015,
    make: "GMC",
    model: "Sierra"
  },
  {
    vin: 3,
    year: 2013,
    make: "Honda",
    model: "Civic DX"
  },
  {
    vin: 4,
    year: 2010,
    make: "Chevy",
    model: "Cavalier"
  },
  {
    vin: 5,
    year: 2017,
    make: "Chevy",
    model: "Volt"
  },
]);

module.exports = {
  vehicles: vehicles
};
