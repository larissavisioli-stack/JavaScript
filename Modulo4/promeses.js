console.log("------ PROMISES - é uma promessa de que teremos um resultado no futuro ------") 

//Formato

//formato que usaremos:
//((parametros ...) => {logico)}

// Criando uma promise 
const promessa = new Promise((resolve, reject) => { 
  const sucesso = false; 
  
  if(sucesso === true){ 
    resolve("Tudo certo!!") 
  } else { 
    reject("Deu errado!!") 
  } 
})


//consumitr a promise

promessa.then((resultado) => {
  console.log(resultado);
})
.catch((erro) => {
  console.log(erro)
});

