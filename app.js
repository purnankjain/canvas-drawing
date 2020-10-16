const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');
var cors = require("cors");
const path = require('path');
app.use(cors({
  origin: '*'
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.use(bodyParser.json());

app.use('/api', require('./files/router'))

module.exports = app