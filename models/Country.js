const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
  avatar: String,
  path: String,
  name: {
    ru: String,
    en: String,
    de: String,
  },
  capital: {
    ru: String,
    en: String,
    de: String,
  },
  population: Number,
  area: Number,
  region: {
    ru: String,
    en: String,
    de: String,
  },
  currency: String,
  flag: String,
  languages: [],
});

module.exports = mongoose.model('Countrys', CountrySchema);
