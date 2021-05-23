'use strict';
const UserModel = require('../module/users.module');

const getMovies = async (req, res) => {
  const { email } = req.query;
  console.log (email);
  await UserModel.find({ email: email }, function (err, userData) {
    if (err) res.send('didnt work');
    res.send(userData);
  });
}

const addMovie = async (request, response) => {
    const { email, movieName, movieDescription, movieYear} = request.body;
    await UserModel.find({ email: email }, (error, userData) => {
      // console.log(userData);
      userData[0].movies.push({
        name: movieName,
        description: movieDescription,
        year: movieYear
      });
      userData[0].save();
      response.send(userData);
    });
  }
  

const deleteMovieForEmail= async (req, res) => {
    const index = Number(req.params.index);
    console.log(req.params);
  
    const { email } = req.query;
    await UserModel.find({ email: email }, (err, userData) => {
  
      const newMoviesArr = userData[0].books.filter((user, idx) => {
        return idx !== index;
      });
      userData[0].movies = newMoviesArr;
      userData[0].save();
  
      res.send(' Movie deleted !');
    });
}

module.exports = {
    getMovies,
    deleteMovieForEmail,
    addMovie 
};

  
