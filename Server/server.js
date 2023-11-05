// mga inimport kong web app framework para sa server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Declare 'app' once
const port = process.env.PORT || 5000;
const http = require('http');
const server = http.createServer(app); // Use 'app' here

// Import ng mga controllers o server-side components
const googleauth = require('./RouterServerSide/AuthGoogleLogged');
const Signup = require('./RouterServerSide/signupregister');
const register = require('./RouterServerSide/login');
const data = require('./RouterServerSide/Userdata');

app.use(cors());

app.use(express.json()); // Middleware para sa pag-parse ng JSON data mula sa HTTP requests
app.options('*', cors()); // Pinapayagan ang pre-flight requests para sa CORS support ito ay para sa pag-aapply ng HTTP request endpoint. Pag wala nito, madalas may error.

const uri = process.env.ATLAS_URI;

// Koneksyon sa MongoDB database gamit ang uri mula sa .env file
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Your MongoDB database connection is established.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: " + err);
  });

app.use('/authGoogle', googleauth); // Routes para sa Google authentication
app.use('/SignupRegs', Signup); // Routes para sa user registration
app.use('/login', register); // Routes para sa login
app.use('/data', data); // Routes para sa login

server.listen(port, () => { // para makita sa console ang server running at port ng iyong server.js
    console.log(`Server is running on port: ${port}`);
});
