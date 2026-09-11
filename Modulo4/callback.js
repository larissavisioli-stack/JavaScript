console.log("-------------------- CallBack ---------------------")


console.log("----- Se vc pedir uma operação que demora muito, o node não precisa esperar parado -----")

console.log("1");
console.log("2");
console.log("3");


console.log("------ sincrono ------")

console.log("Início");

setTimeout(() => {
    console.log("Processamento Terminou");
}, 2000);

console.log("Fim")


console.log("--- CallBack é uma função passada para outra função patra ser executada posteriormente ---")

// numeros = [1, 2, 3, 4, 5, 6, 7, 90];

// numeros.forEach((n) => {
//     console.log(n);
// });

//Isso é CallBack
// (n) => {"
//     console.log(n);)


function processarUsuario(nome, CallBack){
    console.log("Processando " + nome);
    CallBack();
}

processarUsuario("Rihanna" , () =>{ 
    console.log("Usuário processado")
});

// ===================================

function buscarUsuario(callback){
    //simulação de tempo
    setTimeout(() => {
const usuario = {
    id: 1,
    nome: "Rihanna"

        };
        callback(usuario);
    }, 2000)
}

//1
console.log("Início da chamada")

//2
buscarUsuario((usuario) => {
    console.log(usuario);
},2000)

//4
console.log("Fim do processo")




