const faq = require('../data/faq.json')
const finder = require('./finder.js')
const errors = require('./errors.js')
function answerFunction(req, res, next) {
    try{
        const pergunta = req.body.pergunta
        if(pergunta==undefined){
            return next(errors.badRequestError("Parâmetro pergunta precisa ser definido! / pergunta parameter must be defined!"))
        }
        let resposta = finder.findByQuery(faq,pergunta)
        if((req.body.html!=undefined)&&(!req.body.html)){
            resposta = resposta.replace(/(<([^>]+)>)/ig,"")
        }
        let json = {resposta:resposta}
        res.json(json)
    }catch(e){        
        let error =errors.internalServerError(errors.log(e))
        return next(error)
    }        
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