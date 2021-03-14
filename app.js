require('dotenv/config');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

//Import Routes
const countriesRoute = require('./routes/countries');
app.use('/countries', countriesRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
   {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('connected to DB!'))


app.listen(3000);

