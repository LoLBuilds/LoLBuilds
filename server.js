const dotEnv        = require('dotenv').config({silent: true});
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const bodyParser    = require('body-parser');
const lolRoute      = require('./routes/lol.js');

const app           = express();
const port          = process.argv[2] || process.env.PORT || 3000;

app.use('/freeChamps', lolRoute);
// log requests
app.use(logger('dev'));

app.listen(port, console.log('Server is listening on port ', port));

app.use(express.static(path.join(__dirname, 'public')));

