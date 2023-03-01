const express = require("express")
const app = express()

//Criando uma rota para o diretório principal do domínio
app.get("/", function(req, res){
    res.send("Estou na primeira página.")
})

//Criando o servidor web na porta 8081
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
//Nada pode vir após o listen. pois ele encerra a leitura do browser