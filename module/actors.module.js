'use strict';
const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
  name: String,
  birthday:String,
  actorPic:String
  // actorMovies:[]
});
const ActorModel = mongoose.model('movies', ActorSchema);


module.exports = {
  ActorSchema:ActorSchema,
  ActorModel:ActorModel
};
