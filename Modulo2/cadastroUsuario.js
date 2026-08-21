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

 //com objeto eu agora consigo melhorar o que é exibido.
console.log("Oi" + usuario.nome + " seu cadastro foi realizado com sucesso!")
 


 //funcao tradicional

 function somarTrad(numero1, numero2) {
    return  numero1 + numero2;
 }

 //arrow function
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("Tradicional", somarTrad(8,3));
somar(8,3);

                                
    