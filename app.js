const srvchat = require('./lib/srvchat.js')
const routingFunctions = require('./lib/rfunctions.js')

const PORT = process.env.PORT || 29005

let server = srvchat.newServer()
server.post('/thechatbot/v1/answerme', routingFunctions.answerFunction)
server.get('/thechatbot/v1/ping', routingFunctions.iAmOk)
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
    console.log('%s está rodando em %s', server.name, server.url);
});