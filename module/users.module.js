'use strict';
const mongoose = require('mongoose');
// const { getMaxListeners } = require('superagent');
const movie = require ('./movie.module');

// creat collections in our DB using Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true // `email` must be unique
  },
  movies: [movie.MovieSchema]
});

// building the model from the schema
const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserModel: UserModel
};
