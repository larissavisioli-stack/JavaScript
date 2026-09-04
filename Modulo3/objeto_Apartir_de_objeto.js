console.log("---------- OBJETO A PARTIR DE OBJETO ----------")


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


console.log("-- Destructuring --")

const {nome, idade, RM } = aluno;

console.log(nome);

//renomeando com destructuring

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);

console.log("-- SPREAD OPERADOR (algo como espalhar) --")

const dadosFamilia ={
    nomeMae: "Maria Renata",
    noemPai: "Douglas"
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    datacadastro: "28/06/2026"
};


console.log(usuario);


