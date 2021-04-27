var restify = require('restify')
const restifyBodyParser = require('restify-plugins').bodyParser

const newServer = function(serverName){
    let server = restify.createServer()
    server.use(restifyBodyParser())
    server.name = serverName+' by restify'
    return server
}

module.exports = {newServer}