//Servidor para teste//

//1 - imports

import http from "http";

//2 - logica do servidor
//Criar o servidor
//req - request (requisição)
//res -  response (resposta)

    //haarders
const servidor = http.createServer((req, rest) => {
    rest.writeHead(200, {"content-type": "text/html; charset=utf-8"});

    // body - corpo da resposta
    rest.end(JSON.stringify({mensagem: "A minha primeira API com Node.js"}));

    //mostrar o método que está sendo utilizado
    console.log(req.method);
});


//3 - funcoes auxiliares; - CallBacks*
//saber se o servidor está rodando

servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});

//Servidor de rotas//