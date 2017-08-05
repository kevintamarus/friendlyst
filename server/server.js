const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/config');
//models
//route

const PORT = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}));
  //static
  //routes

app.use(express.static(path.join(__dirname, '../client/public')))


app.listen(PORT, err => {
  if (err) {
    console.log(`Error connecting to server! ${err}`);
  } else {
    console.log('Successfully connected to server!');
  }
})