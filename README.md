# Welcome to thechatbot 🤖
![Version](https://img.shields.io/badge/version-0.0.1--BETA-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)
[![Twitter: paiva\_thiago](https://img.shields.io/twitter/follow/paiva\_thiago.svg?style=social)](https://twitter.com/paiva\_thiago)

Então... é um chatbot em API bem simples para uso de perguntas e respostas... A FaqBot!

So... this is a simple chatbot API for use in FAQs... A FaqBot

## Como instalar e executar/How to install and run 💻

```sh
npm install && npm start
```

## Endpoint 🏹

Cara, é BEM simples!
Dude, it is REALLY simple!

### POST /thechatbot/v1/answerme    

**Corpo da requisição de exemplo/Example  request body:**

```json
    {
        "pergunta":"plus one"
    }
``` 

**Corpo da resposta/Response Body**

```json
    {
        "resposta":"Two!"
    }
``` 

As respostas podem conter tags html, mas se por algum motivo o cliente não aceitar html, basta acrescentar um `html:false` no JSON da requisição, como no exemplo abaixo:

The answers may contain html tags, but if your client for some reason do not accept html tags, just add an `html:false` in JSON request, like example below:

```json
    {
        "pergunta":"plus one",
        "html":false
    }
``` 

## Author 👦

👤 **Thiago Paiva**

* Website: http://thiagopaiva.me/
* Twitter: [@paiva\_thiago](https://twitter.com/paiva\_thiago)
* Github: [@paiva-thiago](https://github.com/paiva-thiago)
* LinkedIn: [@paivathiago](https://linkedin.com/in/paivathiago)

## Apóia a gente! / Show your support 👏

Ajudou? dá uma ⭐️ marota no repositório!
Give a ⭐️ if this project helped you!



***
_This README was generated with/README gerado com ❤️ por/by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_