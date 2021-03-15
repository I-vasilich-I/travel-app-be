const express = require('express');
const router = express.Router();
const Coordinate = require('../models/Coordinates');

//GET ALL COUNTRIES
router.get('/', async (req, res) => {
  try {
    const coordinates = await Coordinate.find();
    res.json(coordinates)
  } catch (error) {
    res.json(error.message);
  }
});

//GET SPECIFIC COUNTRY BY PATH
router.get('/:coordinatePath', async (req, res) => {
  try {
    const coordinate = await (await Coordinate.find()).filter((elem) => elem.path == req.params.coordinatePath);
    res.json(coordinate);
  } catch (error) {
    res.json(error.message);
  }
})

//POST A COUNTRY
router.post('/', async (req, res) => {
  const coordinatesData = JSON.stringify(req.body.coordinates);
  const coord = new Coordinate({
    path: req.body.path,
    location: req.body.location,
    coordinates: JSON.parse(coordinatesData)
  });

  try {
    const savedCoord = await coord.save();
    res.json(savedCoord);
  } catch (error) {
    res.json(error.message);
  }

  coord.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(error.message);
      });
})


module.exports = router;