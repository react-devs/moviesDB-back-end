'use strict';

// loading /require the packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const homeController = require('./controller/index.controller');
const moviesController = require('./controller/movies.controller');
const userController = require('./controller/user.controller')

// initialize and setup the server
const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());

// new middleware (checkpoint) where it will decode any request body
app.use(express.json());

// connect our express to our mongo db
mongoose.connect(`mongodb://127.0.0.1:${process.env.DATABASE_URL}/movies`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// initialize the root path
app.get('/', homeController.homePage);
app.get('/movies', moviesController.getMovies);
app.post('/movies', moviesController.addMovie);
app.post('/user', userController.addNewUser);
app.delete('/movies/:index', moviesController.deleteMovieForEmail);
// test
app.listen(PORT, () => console.log(`listening on ${PORT}`));
