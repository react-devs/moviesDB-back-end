'use strict';

// loading /require the packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const homeController = require('./controller/index.controller');
const moviesController = require('./controller/movies.controller');
const userController = require('./controller/user.controller');
const path = require('path')

// initialize and setup the server
const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());

// new middleware (checkpoint) where it will decode any request body
app.use(express.json());



// connect our express to our mongo db

const DBconcetion = async ()=>{

  try{
    mongoose.connect(process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    mongoose.set('useCreateIndex', true);

    console.log('dataBase conected')
  }catch(err){
    console.log(err)
  }
}

DBconcetion()
//test///

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

////test///

console.log(process.env.NODE_ENV)
// initialize the root path
app.get('/', homeController.homePage);
app.get('/movies', moviesController.getMovies);
app.post('/movies', moviesController.addMovie);
app.post('/user', userController.addNewUser);
app.delete('/movies/:index', moviesController.deleteMovieForEmail);
// test
app.listen(PORT, () => console.log(`listening on ${PORT}`));
