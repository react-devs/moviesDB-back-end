'use strict';
const mongoose = require('mongoose');
// const { getMaxListeners } = require('superagent');
const movie = require ('./movie.module');

const UserSchema = new mongoose.Schema({
  email: String,
  movies: [movie.MovieSchema]
});


const UserModel = mongoose.model('user', UserSchema);
const sufian = new UserModel({
  email: 'sufian.hamdan.1992.94@gmail.com',
  movies: [{name: 'asdasdasdasd', description: 'klaskfnanma', year: '04-11-2000', duration: '190'}]

});

// sufian.save();


module.exports = {
  UserModel: UserModel
};
