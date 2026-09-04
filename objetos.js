/*
um objeto representa uma "coisa"do mundo real através de propriedades e comportamentos.

const nome= [] array
const nome= {} objeto
const arrayDeObjeto= [{}, {}, {}, {}] <---- mais comum
const objetoDeObjeto = {{}{}{}{}{}} <----- menos comum

*/

console.log("---------- construindo um 1 objeto ----------")


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
console.log(aluno);

console.log("---------- Acessando propriedades do objeto ---------")

console.log(aluno.nome);

// regra se cadastroAtivo = true, msg = seja bemvindo ao nosso sistema.

if(aluno.cadastroAtivo === true){
    console.log("Seja bem-vindo ao nosso sistema, " + aluno.nome)
}
else{
    console.log("O seu cadastro não está ativo, procure o RH")
}

console.log(aluno.endereco.rua);

console.log("---------- Alterar propriedades do objeto ----------")

aluno.idade = 18

console.log(aluno.idade)



console.log("Alterando o cadastro ativo e o baitro:")


aluno.cadastroAtivo= false;
aluno.endereco.bairro = "Jardim Lagoinha";

console.log(aluno.cadastroAtivo);
console.log(aluno.endereco.bairro);


//adicionando cpf e telefone 

 aluno.cpf= 54916532848
 aluno.telefone = "(19)999335841"
 console.log(aluno);

 //deletando uma propriedade

 delete aluno.curso;
 console.log(aluno);





 