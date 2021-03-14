const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

router.get('/', (req, res) => {
  res.send('we are on countries');
});

router.post('/', (req, res) => {
  console.log(req.body);
})


module.exports = router;