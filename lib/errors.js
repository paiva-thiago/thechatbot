const log =(e)=>{
    let now = new Date()
    console.error(now + "\nSERVICE ERROR / FALHA NA CHAMADA DO SERVIÇO "+e)
    return e
}

module.exports ={log}