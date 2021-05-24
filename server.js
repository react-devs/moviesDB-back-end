'use strict';

// require
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const homeController = require('./controller/index.controller');
const moviesController = require('./controller/movies.controller');
const userController = require('./controller/user.controller')


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8081;
mongoose.connect(`mongodb://127.0.0.1:${process.env.DATABASE_URL}/movies`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// give our app acces to comminicate with our front end
// app.use(cors());

// initialize the root path
app.get('/', homeController.homePage);
app.get('/movies', moviesController.getMovies);
app.post('/movies', moviesController.addMovie);
app.post('/user', userController.addNewUser);
app.delete('/movies/:index', moviesController.deleteMovieForEmail);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
