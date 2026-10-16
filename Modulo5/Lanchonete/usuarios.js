const usuarios = [{
    id: 1,
    nome: "Larissa",
    whats: "19999335841",
    email: "larissa@gmail.com",
    cep: "13560070"
},
{
    id: 2,
    nome: "Renata",
    whats: "19981666091",
    email: "renata@gmail.com",
    cep: "13568970"
},
{
    id: 3,
    nome: "Douglas",
    whats: "19997801467",
    email: "douglas@gmail.com",
    cep: "13568324"
}
];
exports.usuarios = usuarios;


// função buscarUsuario

async function buscarUsuario(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const usuario = usuarios.find(usuario => usuario.id === id);

            if(usuario){
                resolve(usuario);
            }
            else{
                reject("Usuário não encontrado");
            }

        }, 1000)

    })
}

// Transformando em modulo
module.exports = {
    buscarUsuario
};
