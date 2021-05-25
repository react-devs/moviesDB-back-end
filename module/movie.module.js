'use strict';

const mongoose = require('mongoose');

// creat collections in our DB using Schema
const MovieSchema = new mongoose.Schema({
  name: String,
  description: String,
  year: String,
  duration: String,
  movieImg: String,
  movieGenres: String
});
// building the model from the schema
const MoviesModel = mongoose.model('movie', MovieSchema);

module.exports = {
  MovieSchema: MovieSchema,
  MoviesModel: MoviesModel
};
