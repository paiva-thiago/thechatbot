const faq = require('../data/faq.json')
const finder = require('./finder.js')

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

function iAmOk(req,res,next){
    let json = [{locale:'pt-BR',msg:'Olá, Cara!'},{locale:'eng',msg:'Hello, Dude!'}]
    res.json(json)
    next();
}

module.exports = {
    iAmOk,
    answerFunction
}