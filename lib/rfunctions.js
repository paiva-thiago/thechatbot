const faq = require('../data/faq.json')
const finder = require('./finder.js')
const errors = require('./errors.js')
const entity = require('html-entities')
const  { TiledeskChatbotClient }   = require('@tiledesk/tiledesk-chatbot-client');

function processQuestion(pergunta, html){
    if(pergunta==undefined){
        return {resposta:'',error:true};
    }
    let resposta = finder.findByQuery(faq,pergunta)
    if(!html){
        resposta = resposta.replace(/(<([^>]+)>)/ig,"")
        resposta = entity.decode(resposta)
    }
    return {resposta:resposta, error:false}    
}
function tileDeskAnswerFunction(req, res, next){
    const tdClient =  new TiledeskChatbotClient({request: req, response: res})
    let txt = ''
    const aResposta = processQuestion(tdclient.text,false)
    if(!aResposta.error){
        txt = aResposta.resposta
    }     
    
    let retorno = {text:txt}
    tdClient.sendMessage(retorno)
    res.send(retorno)
    next()
}

function answerFunction(req, res, next) {
    try{
        const aResposta = processQuestion(req.body.pergunta,req.body.html)
        if(aResposta.error){
            return next(errors.badRequestError("Parâmetro pergunta precisa ser definido! / pergunta parameter must be defined!"))
        }else{
            let json = {resposta:aResposta.resposta}
            res.json(json)
        }       
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
    answerFunction,
    tileDeskAnswerFunction
}