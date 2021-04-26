const EXCLUDE = [
    'q',  'w',  'e',   'r',  't',  'y',
    'u',  'i',  'o',   'p',  'a',  's',
    'd',  'f',  'g',   'h',  'j',  'k',
    'l',  'ç',  'z',   'x',  'c',  'v',
    'b',  'n',  'm',   'no', 'na', 'do',
    'da', 'de', 'pra', 'pro'
  ]
String.prototype.removeAccents = function() { return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}

const mergeArrays = (arr1,arr2) => arr1.filter(value => arr2.includes(value));
const prepareTheWordForQuery = (w)=>w.toLowerCase().replace('email','e-mail').replace('-','*')
const findByQuery = (base, qry) => {
    let words = qry.toLowerCase().removeAccents().split(' ').filter((w)=>EXCLUDE.indexOf(w)==-1)
    let todasAsPerguntas = []
    for(w of words){
        console.log(w)
        let algumasPerguntas = base.map((x)=>x.Question).filter((y)=>y.toLowerCase().match(prepareTheWordForQuery(w))!=null)
        console.log(algumasPerguntas)
        if(todasAsPerguntas.length===0){
            todasAsPerguntas = algumasPerguntas
        }else{
            todasAsPerguntas = mergeArrays(todasAsPerguntas,algumasPerguntas)
        }
    }
    if(todasAsPerguntas.length==0){
        return 'Não encontramos nada referente a sua dúvida! Experimente entrar no FAQ ou falar com um de nossos atendentes!'
    }else{
        console.log('Exibindo a resposta da seguinte pergunta:')
        console.log(todasAsPerguntas[0])
        let objetoDaResposta = base.filter((q)=>q.Question==todasAsPerguntas[0])[0]
        console.log('que é '+objetoDaResposta['Answer'])
        return objetoDaResposta.Answer
    }
}
module.exports = {findByQuery}