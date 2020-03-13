'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -- Synchronous hash and response of password hashing.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    })
  })

//END_ASYNC

//START_SYNC -- synchronous hashing and response of the password

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
console.log(hash)

var result = bcrypt.compareSync(myPlaintextPassword, hash)
console.log(result)

//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
