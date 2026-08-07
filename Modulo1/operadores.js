// //#region- Início
// // const vitoria = 20;

// // console.log(vitoria <= 13);
// //#endregion
 
// // //#region- Start Operadores 
// // export const a = 8;
// // export const b = 3;

// // // console.log(a+b);
// // // console.log(a*b);
// // // console.log(a/b);
// // // console.log(a%b); //Resto da divisão
// //  //#endregion

// //#region- operadores de comparação 

// // // console.log(a > b)
// // // console.log(a < b)
// // // console.log(a >= b)
// // // console.log(a <= b)
// // // console.log(a == b)  // comparaçao de valor
// // // console.log(a === b) // comparação de valor e tipo
// // // console.log(a != b)

// //#endregion

// // //#region- Exercício aplicando operadores de comparação com variáveis
// // //  Faça a comparações a partir da variável informada


// const idade1 = 20
// const idade2 = 25

// console.log(idade1 > idade2 );
// console.log(idade1 < idade2 );
// console.log(idade1 >= idade2 );
// console.log(idade1 <= idade2 );
// console.log(idade1 == idade2 ); // comparaçao de valor
// console.log(idade1 === idade2 ); // comparação de valor e tipo
// console.log(idade1 != idade2 )


// //  //#endregion


// // //#region Operadores lógicos

// // const idade3 = 17
// // const idade4 = 15

// // console.log(idade3 > 18 && idade4 > 18);
// //  //#endregion

// // //#region Operadores lógico OR
// // console.log(idade3 > 18 || idade4 > 18);

// //  //#endregion

// // //# region Operadores lógico NOT
// // console.log(!(idade3 > 18));
// // //#endregion


// // const idade= 25;
// // const matriculaAtivo = true;
// // const podeComprar = idade >= 18 && matriculaAtivo;

// // console.log(podeComprar);

// // //#region Operadores de incremento e decremento
// // let numero = 10;
// // console.log(numero++);  //10
// // console.log(numero);   //11
// // console.log(++numero);  //12 

// // console.log(numero--);  //12
// // console.log(numero);   //11
// // console.log(--numero);  //10
// // //#endregion

// //#region EXERCÍCIO 1 --> Comparação //faça a comparação a partir da variável informada

// // const x = 5;
// // const y = 7;

// // console.log(x > y);
// // console.log( x < y);
// // console.log( x >= y) ;
// // console.log( x <= y);
// // console.log( x == y); 
// // console.log( x === y); 
// // console.log( x!=  y)
// //#endregion

// //#region EXERCÍCIO 2 --> verifique os resultados das comparações a seguir 

// // console.log(10 == "10");

// // console.log(10 === "10");

// // console.log(true == 1);

// // console.log(true === 1);

// // console.log(null == undefined);

// // console.log(null === undefined);

// //#endregion

// //#region CÁLCULO SIMPLES DE IDADE A PARTIR DA DATA DE NASCIMENTO


// const dataNascimento = new Date("2000-02-29");
// const ativo = true;

// // // crie uma expressão que indique se o usuário pode ou não acessar o sistema
// // //Regra: o usuário precisa ter pelo menos 18 anos e estar ativo


//  const idade = (new Date() - dataNascimento);

// const podeAcessar =  dataNascimento >= 18 && ativo;

// console.log(podeAcessar);

// //#endregion

// //#region COM OUTROAS FUNÇÕES

// const dataNascimento = new Date("2025-05-15");
// const ativo = true;

// //Transformando 18 anos em milissegundos
// const dezoitoanosemilissegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

// //comparando milissegundos com milissegundos!
// const podeAcessar = (new Date() - dataNascimento) >=
//         dezoitoanosemilissegundos && ativo;

// console.log(podeAcessar);

// //#endregion