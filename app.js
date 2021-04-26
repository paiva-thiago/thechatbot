var restify = require('restify')
const faq = require('./data/faq.json')
const finder = require('./lib/finder.js')

const restifyBodyParser = require('restify-plugins').bodyParser

const PORT = 29005

function answerFunction(req, res, next) {
    const pergunta = req.body.pergunta
    let resposta = finder.findByQuery(faq,pergunta)
    if((req.body.html!=undefined)&&(!req.body.html)){
        resposta = resposta.replace(/(<([^>]+)>)/ig,"")
    }
    let json = {resposta:resposta}
    res.json(json)
    next()
}


var server = restify.createServer();
server.use(restifyBodyParser());
server.post('/thechatbot/v1/answerme', answerFunction);
server.name = 'thechatbot by restify'
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});