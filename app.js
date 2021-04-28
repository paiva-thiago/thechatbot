const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./lib/functions.js')
const { TiledeskChatbotClient } = require('@tiledesk/tiledesk-chatbot-client');

const app = express();
app.use(bodyParser.json());

app.post('/thechatbot/v1/answerme', functions.answerFunction)
app.get('/thechatbot/v1/ping', functions.iAmOk)
app.post('/thechatbot/v1/answerme/tiledesk', (req, res) => {
  const tdclient = 
    new TiledeskChatbotClient({request: req, response: res})
  console.log('Pergunta recebida: ' + tdclient.text)
  res.status(200).send({"success":true});
  let msg = {
    text: functions.processQuestion(tdclient.text,false)
  }
  tdclient.sendMessage(msg)
})

// Alternative chatbot endpoint with raw http call

app.listen(29005, () => {
  console.log('server started');
});