console.log("---------------- Async ---------------")

//no promise temos 
// promessa.then((resultado) => {
//   console.log(resultado);
// });

console.log("Async/await - Essa função vai funcionar de forma assincrona e vai ter um pedaço que vamos precisar esperar")

async function buscarUsuario(id) { 

try {
    //aqui é oq eu quero que aconteça
    const usuario = await buscarUsuario(idBuscado);
    console.log(usuario);
}
catch(erro){
    //erro que rolou
    console.log(erro);
}}
