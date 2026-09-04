console.log("---------- objeto X json -----------")

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

///objeto passando para JSON
const json = JSON.stringify(aluno);

console.log(json);


///JSON para objeto

const objeto = JSON.parse(json);

console.log(objeto);