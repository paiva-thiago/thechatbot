var restify = require('restify')
const restifyBodyParser = require('restify-plugins').bodyParser

const newServer = function(){
    let server = restify.createServer()
    server.use(restifyBodyParser())
    server.name = "thechatbot API"
    return server
}

module.exports = {newServer}