const frutas= ["Maça", "Banana", "Laranja", "Uva", "Abacaxi", "Pera" ];

//#region --> Acessando elementos do array:

console.log(frutas[4]);
//#endregion

//#region --> Contando elementos do array

console.log(frutas.length);
//#endregion

//#region --> Acessando op último elemento do array

console.log(frutas[frutas.length - 1] );
//#endregion

//#region --> Alterando elementos do array

frutas[5] = "Morango";
console.log(frutas);
//#endregion

//#region --> Colocando no início do array

frutas.push("Morango");
console.log(frutas);
//#endregion

//#region --> Colocando no início 

frutas.unshift("Manga");
console.log(frutas);
//#endregion

//#region --> Deleta do final do array

frutas.pop();
console.log(frutas);
//#endregion

//#region --> Deleta do início do array

frutas.shift();
console.log(frutas);

const itemRemovido = frutas.pop();
console.log(itemRemovido);
//#endregion

//#region 

//#endregion

//#region 

//#endregion