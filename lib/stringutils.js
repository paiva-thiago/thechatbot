const entity = require('html-entities')

const withoutHtmlCode = (text)=>{
    text = text.replace(/(<([^>]+)>)/ig,"")
    text = entity.decode(text)
    return text
}

const blankOrNull = (text)=>((text==undefined)||(text==null)||(text.trim()==''))

const removeAccents = (text)=> text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

module.exports = {withoutHtmlCode,blankOrNull, removeAccents}