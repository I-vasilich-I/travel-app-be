const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
  path: String,
  videoUrl: String,
  places: [
    {
      name: {
        ru: String,
        en: String,
        de: String,
      },
      info: {
        ru: String,
        en: String,
        de: String,
      },
      img: String
    }
  ]
});

module.exports = mongoose.model('Places', PlaceSchema);