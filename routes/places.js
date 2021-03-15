const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

//GET ALL COUNTRIES
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places)
  } catch (error) {
    res.json(error.message);
  }
});

//GET SPECIFIC COUNTRY BY PATH
router.get('/:placePath', async (req, res) => {
  try {
    const place = await (await Place.find()).filter((elem) => elem.path == req.params.placePath);
    res.json(place);
  } catch (error) {
    res.json(error.message);
  }
})

//POST A COUNTRY
router.post('/', async (req, res) => {
  const placesData = JSON.stringify(req.body.places);
  const place = new Place({
    path: req.body.path,
    videoUrl: req.body.videoUrl,
    places: JSON.parse(placesData)
  });

  try {
    const savedPlace = await place.save();
    res.json(savedPlace);
  } catch (error) {
    res.json(error.message);
  }

  place.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(error.message);
      });
})


module.exports = router;