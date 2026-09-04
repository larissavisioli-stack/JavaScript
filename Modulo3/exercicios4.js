console.log("---------------- EXERCÍCIOS ----------------") 

console.log("___________________________________________________") 

//#region - Manipulação básica

console.log("---------------- Manipulação básica ----------------") 

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexiriaca"];

//Adicione "Morango" no final.

frutas.push("Morango");

//Adicione "Abacaxi" no início.

frutas.unshift("Abacaxi");
// Remova o último elemento.

frutas.pop();

//Remova o primeiro elemento.

frutas.shift();

//Mostre a quantidade de frutas.

console.log(frutas.length);

console.log(frutas);

//#endregion

//#region forEach

console.log("---------------- FOREACH ----------------") 

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 

nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});
//#endregion

//#region map

console.log("---------------- MAP ----------------") 

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const novosPrecos = precos.map(preco => {
    return preco * 1.10;
});

console.log(novosPrecos);


//#endregion

//#region filter

console.log("---------------- FILTER ----------------") 
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.


const maioresQue20 = numeros.filter((numero) => {
    return numero > 20;
});

console.log(maioresQue20)


//#endregion

//#region find

console.log("---------------- FIND ----------------") 


const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.

const numero = listaNumeros.find(numero => numero > 20);

console.log(numero);

//#endregion

//#region some
console.log("---------------- SOME ----------------") 

const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 

const existeMaior = idades.some(idade => idade >= 18);

console.log("Existe alguém maior de idade?:"  + existeMaior  );

//every

//Usando o array acimima codifique respondendo: Todos são maiores de idade?

const tdsMaiores18 = numeros.every(n => n >= 18);
console.log("Todos são maiores de idade?: " + tdsMaiores18);

//#endregion

//#region reduce

console.log("---------------- REDUCE ----------------") 

const valores = [100, 200, 50, 150];

//Calcule o valor total.

const soma = valores.reduce((total, valores) => {
    return total + valores;
}, 0);
console.log(soma);

//#endregion