console.log("---------- ATIVIDADE 2 ----------")

//Dados iniciais 
const dadosPessoais = {
    nome: "Guilherme",
    matricula: '20260828',
    curso: 'Análise e Desenvolvimento de Sistemas'
};


const dadosContato ={
    email:'guilherme@email.com',
    telefone: '(11)99999-99999'
};


console.log("--- Mesclando objetos em perfil completo ---")

const perfilCompleto = {
    ...dadosPessoais,
    ...dadosContato
};

console.log(perfilCompleto)



console.log("--- Atualizando propriedades ---")

const perfilAtualizado = {
    ...dadosPessoais,
    status : "Matriculado"
};
    perfilAtualizado.curso = "Engenharia de Software"

console.log(perfilAtualizado)