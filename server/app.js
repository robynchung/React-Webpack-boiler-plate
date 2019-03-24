const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

mongoose.connect('url');
app.use(bodyParser.json());
app.use(router);

app.listen(4000);
