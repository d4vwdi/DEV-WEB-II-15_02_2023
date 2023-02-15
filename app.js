var http = require("http")

http.createServer(function(req, res){
    res.end("Mensagem direcionada!")
}).listen(8081)

console.log("Servidor Ativo!")


//CARREGAMENTO DE MÓDULOS
//var soma = require('./soma.js')
//var subtracao = require('./subtracao.js')
//var multiplicacao = require('./multiplicacao.js')
//var divisao = require('./divisao.js')
//
//console.log(soma(10,10))
//console.log(subtracao(10,10))
//console.log(multiplicacao(10,10))
//console.log(divisao(10,10))
//FIM DO CARREGAMENTO DE MÓDULOS

//TESTE LÓGICO SE (IF)
// var a = 10

//     if(a <= 10){
//         console.log("A variável a é menor ou igual a 10")
//     }else{
//         console.log("A variável a é maior que 10")
//     }
//FIM DO TESTE LÓGICO SE (IF)


//REALIZANDO OPERAÇÕES DE CALCULADORA
// var b = 30
// var total = 0

// //Adição
// total = a + b
// console.log(total)

// //Subtração
// total = a - b
// console.log(total)

// //Multiplicação
// total = a * b
// console.log(total)

// //Divisão
// total = a / b
// console.log(total)
//FIM DAS OPERAÇÕES DE CALCULADORA

//MENSAGEM NO TERMINAL DE COMANDO
// console.log ("Primeira aula de Node JS")

