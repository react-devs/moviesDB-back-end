'use strict';

// require
require('dotenv').config();
const express = require('express');
// const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8081;

// give our app acces to comminicate with our front end
// app.use(cors());

// initialize the root path
app.get('/', homePage);

function homePage(req, res) {
  res.send('Mema3aaaaaaaaaaaaaaa');
  console.log('Mema3aaaaaaaaaaaaaaaa');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
