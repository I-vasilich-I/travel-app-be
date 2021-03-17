const express = require('express');
const router = express.Router();
const User = require('../models/LoginData');

//GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users)
  } catch (error) {
    res.json(error.message);
  }
});

//GET SPECIFIC USER BY NAME
router.get('/:user', async (req, res) => {
  try {
    const user = await (await User.find()).filter((elem) => elem.user === req.params.user);
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
})

//POST A USER 
router.post('/', async (req, res) => {
  const user = new User({
    user: req.body.user,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json(error.message);
  }

  user.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(error.message);
      });
})


module.exports = router;