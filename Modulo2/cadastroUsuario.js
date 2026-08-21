/*
relembrando objetos:
-const pessoa [] - array
-const pessoa {} - objeto
*/


//cadastro de usuário 

function cadastroUsuario(id, nome, senha, cpf, email){
    return{
        id,
        nome,
        senha,
        cpf,
        email
    };
 }

 const usuario = cadastroUsuario(1, "Larissa", "AlunoMorreu#23", 54916532848, "lari@gmail.com");

 console.log(usuario);