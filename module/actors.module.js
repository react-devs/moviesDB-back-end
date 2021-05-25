'use strict';
const mongoose = require('mongoose');

// creat collections in our DB using Schema
const ActorSchema = new mongoose.Schema({
  name: String,
  birthday:String,
  actorPic:String
  // actorMovies:[]
});

// building the model from the schema
const ActorModel = mongoose.model('movies', ActorSchema);


module.exports = {
  ActorSchema:ActorSchema,
  ActorModel:ActorModel
};
