const frutas= ["maça", "banana", "laranja", "uva", "abacaxi", "pera" ];

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

frutas.forEach((fruta) => {
    const nomeFrutaPrimeiraLetraMaiuscula =
    fruta.charAt(0).toLocaleUpperCase() + fruta.slice(1);

    console.log(nomeFrutaPrimeiraLetraMaiuscula);
});


//#endregion