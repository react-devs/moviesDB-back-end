'use strict';

// require
require('dotenv').config();
const express = require('express');
const homeController = require('./controller/index.controller')
// const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8081;

// give our app acces to comminicate with our front end
// app.use(cors());

// initialize the root path
app.get('/', homeController.homePage);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
