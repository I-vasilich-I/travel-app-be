const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

//GET ALL COUNTRIES
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries)
  } catch (error) {
    res.json(error.message);
  }
});

//GET SPECIFIC COUNTRY BY PATH
router.get('/:countryPath', async (req, res) => {
  try {
    const country = await (await Country.find()).filter((elem) => elem.path == req.params.countryPath);
    res.json(country);
  } catch (error) {
    res.json(error.message);
  }
})

//POST A COUNTRY
router.post('/', async (req, res) => {
  const country = new Country({
    avatar: req.body.avatar,
    path: req.body.path,
    name: {
      ru: req.body.name.ru,
      en: req.body.name.en,
      de: req.body.name.de,
    },
    capital: {
      ru: req.body.capital.ru,
      en: req.body.capital.en,
      de: req.body.capital.de,
    },
    population: req.body.population,
    area: req.body.area,
    region: {
      ru: req.body.region.ru,
      en: req.body.region.en,
      de: req.body.region.de,
    },
    currency: req.body.currency,
    flag: req.body.flag,
    languages: req.body.languages,
  });

  try {
    const savedCountry = await country.save();
    res.json(savedCountry);
  } catch (error) {
    res.json(error.message);
  }

  country.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(error.message);
      });
})


module.exports = router;