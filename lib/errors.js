const errs = require('restify-errors')

const log =(e)=>{
    let now = new Date()
    console.error(now + "\nSERVICE ERROR / FALHA NA CHAMADA DO SERVIÇO "+e)
    return e
}

const badRequestError = (e) => new errs.BadRequestError(e)
const internalServerError = (e) => new errs.InternalServerError(e)
module.exports ={badRequestError,internalServerError,log}