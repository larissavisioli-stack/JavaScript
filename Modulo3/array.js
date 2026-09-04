// const frutas= ["maça", "banana", "laranja", "uva", "abacaxi", "pera" ];

//#region --> Acessando elementos do array:

// console.log(frutas[4]);
//#endregion

// //#region --> Contando elementos do array

// console.log(frutas.length);
// //#endregion

// //#region --> Acessando op último elemento do array

// console.log(frutas[frutas.length - 1] );
// //#endregion

// //#region --> Alterando elementos do array

// frutas[5] = "Morango";
// console.log(frutas);
// //#endregion

// //#region --> Colocando no início do array

// frutas.push("Morango");
// console.log(frutas);
// //#endregion

// //#region --> Colocando no início 

// frutas.unshift("Manga");
// console.log(frutas);
// //#endregion

// //#region --> Deleta do final do array

// frutas.pop();
// console.log(frutas);
// //#endregion

//#region --> Deleta do início do array

// frutas.shift();
// console.log(frutas);

// const itemRemovido = frutas.pop();
// console.log(itemRemovido);
//#endregion

//#region For off

// for (const fruta of frutas){
//     console.log(fruta);
//     return fruta;
// }
//#endregion

//#region Varrendoo array

// frutas.forEach((fruta) =>{
//     console.log(fruta);
// }); 
//#endregion

//#region Mudando a primeira letra da palavra para maiúsculo

// frutas.forEach((fruta) => {
//     const nomeFrutaPrimeiraLetraMaiuscula =
//     fruta.charAt(0).toLocaleUpperCase() + fruta.slice(1);

//     console.log(nomeFrutaPrimeiraLetraMaiuscula);
// });


//#endregion

const numeros = [1, 2, 3, 4, 5, 6];


//#region --> cria um novo array com os elementos modificados

// const numerosDobrados = numeros.map((numero) => {
//     return numero * 2; 
// });

// console.log(numerosDobrados);
//#endregion


//#region --> FILTER - cria um novo array com os elementos que atendem a uma condição

// const maioresQue3 = numeros.filter((numero) => {
//     return numero > 3;
// });

// console.log(maioresQue3)
//#endregion


//#region --> Lembrete 1
/*
_______________________________________________________
Método     |        Pergunta
_______________________________________________________
´forEach´  |   O que quero fazer com cada elemento?
-------------------------------------------------------
´map´      |    Como quero transformar cada elemento?
--------------------------------------------------------
´filter´   |    Quais elementos quero manter?
--------------------------------------------------------
*/

//#endregion

//#region  FIND - procura um elemento que satisfaça uma condição

const numerof = numeros.find((n) => n > 4);
console.log(numerof);
//#endregion

//#region  Lembrete 2

/*
_____________________________________________________
filter X find

filter -> 
retorna vários objetos

find -> 
retorna o primeiro elemento
__________________________________________________

/*
filter X find

filter -> 
retorna vários objetos

find -> 
retorna o primeiro elemento
___________________________________________________
*/
//#endregion

//#region --> SOME 

const existeMaiorQue5 = numeros.some(n => n > 8);
console.log(existeMaiorQue5)
//#endregion

//#region --> EVERY

const todosMaioresQue0 = numeros.every(n => n > 0);
console.log(todosMaioresQue0)
//#endregion

//#region --> REDUCE

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);

//#endregion

 


