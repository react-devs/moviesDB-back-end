const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:${process.env.DATABASE_URL}/movies`, {useNewUrlParser: true, useUnifiedTopology: true});

const movie = require('./movie.module')
  
const user = new mongoose.Schema({
    Email: String,
    movies: [movie.bookSchema]
});
  
  
const UserModel = mongoose.model('user', user);




module.exports = {
    UserModel:UserModel
};