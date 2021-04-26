const fs = require('fs')
let text = fs.readFileSync('./data/faq.csv')
text = text.replace(/<(.|\n)*?>/g, '');
fs.writeFileSync('./data/faq-clean.csv')