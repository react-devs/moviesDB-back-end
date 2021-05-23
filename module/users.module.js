'use strict';
const mongoose = require('mongoose');
const movie = require ('./movie.module');

const UserSchema = new mongoose.Schema({
  email: String,
  movies: [movie.MovieSchema]
});


const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserModel: UserModel
};
