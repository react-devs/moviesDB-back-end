
"use strict";

const mongoose = require("mongoose");
const actors = require('./actors.module')

const movieSchema = new mongoose.Schema({
  name: String,
  description: String,
  year: String,
  actors:[actors.actorSchema]
});
const moviesModel = mongoose.model("movies", movieSchema);

module.exports = {
    movieSchema: movieSchema,
    moviesModel: moviesModel,
};