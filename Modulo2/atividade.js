console.log("---------- ATIVIDADE 1 ----------");


function saudacao(nome){
    return{
    nome
    };
 }

const nome = saudacao("Larissa!"); 

console.log("Olá, " + nome.nome)


console.log("---------- ATIVIDADE 2 ----------")


//ADIÇÃO

 function somar(numero1, numero2) {
    return  numero1 + numero2;
 }
 console.log("O resultado da soma é: ", somar (1,2));

//SUBTRAÇÃO

 function subtrair(numero1, numero2) {
    return  numero1 - numero2;
 }
 console.log("O resultado da subtração é: ", subtrair (100,20));

//MULTIPLICAÇÃO

 function multiplicacao(numero1, numero2) {
    return  numero1 * numero2;
 }
 console.log("O resultado da multiplicação é: ", multiplicacao (6,3));

//DIVISÃO

 function divisao(numero1, numero2) {
    return  numero1 / numero2;
 }
 console.log("O resultado da divisao é: ", divisao (6,3));


 console.log("---------- ATIVIDADE 3 -----------")

 function idade(idade){
    return(idade)
 }

 const idade2 = idade(19);

 if(idade2 >= 18){
    console.log("----- MAIOR DE IDADE -----")
 }
 else{
    console.log("----- MENOR DE IDADE -----")
 }

 console.log("---------- ATIVIDADE 4 -----------")

// transformando em uma Arrow Function 

 const calcularDobro = (numero) =>{
    return numero * 2;
 }