const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('url');
app.use(bodyParser.json());

app.listen(4000);
