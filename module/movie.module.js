'use strict';

const mongoose = require('mongoose');
const actors = require('./actors.module');

const MovieSchema = new mongoose.Schema({
  name: String,
  description: String,
  year: String,
  duration: String,
  movieImg: String,
  movieGenres: String
  // actors: [actors.ActorSchema]
});
const MoviesModel = mongoose.model('movie', MovieSchema);

module.exports = {
  MovieSchema: MovieSchema,
  MoviesModel: MoviesModel
};
