const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./lib/functions.js')

const app = express();
app.use(bodyParser.json());

app.post('/thechatbot/v1/answerme', functions.answerFunction)
app.get('/thechatbot/v1/ping', functions.iAmOk)

app.listen(29005, () => {
  console.log('server started');
});