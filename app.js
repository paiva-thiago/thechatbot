var restify = require('restify')
const faq = require('./data/faq.json')
const finder = require('./lib/finder.js')

const restifyBodyParser = require('restify-plugins').bodyParser

const PORT = 29005

function respond(req, res, next) {
    console.log(req.body)
    const pergunta = req.body.pergunta
    const msg = `Olá, você perguntou por ${pergunta}`
    const resposta = finder.findByQuery(faq,pergunta)
    let json = {resposta:resposta}
    res.json(json)
    next()
}


var server = restify.createServer();
server.use(restifyBodyParser());
server.post('/thechatbot/v1/answerme', respond);
server.name = 'thechatbot by restify'
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});