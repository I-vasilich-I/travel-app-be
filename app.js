require('dotenv/config');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

app.use(cors());
app.use(helmet());
app.use(express.json({limit: '50mb'}));

app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));

//Import Routes
const countriesRoute = require('./routes/countries');
app.use('/countries', countriesRoute);
const placesRoute = require('./routes/places');
app.use('/places', placesRoute);
const coordinatesRoute = require('./routes/coordinates');
app.use('/coordinates', coordinatesRoute);
const login = require('./routes/login');
app.use('/login', login);

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

app.use((req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
   {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('connected to DB!')
)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

