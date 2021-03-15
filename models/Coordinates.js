const mongoose = require('mongoose');

const CoordinateSchema = mongoose.Schema({
  path: String,
  location: [],
  coordinates: [
    [
      []
    ]
  ]
});

module.exports = mongoose.model('Coordinates', CoordinateSchema);