

const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: String,
  birthday:String,
  actorPic:String
  // actorMovies:[]
});
const actorSchema = mongoose.model("movies", actorSchema);


module.exports = {
  actorSchema:actorSchema,
  actorSchema:actorSchema
};