const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 87654,
    cadastroAtivo : true,
    email: null,
    hobby: ["ler", "bola", "xadrez"],
    endereco: {rua: "Rua 35, 45",
               bairro:"Jardim Itália",
               cidade:"Santa Rita do Passa Quatro",
               estado:"São Paulo",
               pais:"Brasil",
               cep: 13000560}
};

//oject.keys; object.value; object.entries
console.log("-- CHAVES DO OBJETO --") ///////////////

console.log(Object.keys(aluno));

console.log("-- VALORES DO OBJETO --") ////////////

console.log(Object.values(aluno));

console.log("-- RELAÇÃO CHAVE <--> VALOR --") ///////////

console.log(Object.entries(aluno));


