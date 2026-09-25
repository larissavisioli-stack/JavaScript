///SERVIÇOS

const serviços = [
    {id: 101,
     nome: "Banho e tosa",
     preco: 150
    },

      {id: 102,
     nome: "Consulta veterinária",
     preco: 90
    },

      {id: 103,
     nome: "Consulta a domicílio",
     preco: 120
    },

      {id: 104,
     nome: "Vacinação",
     preco: 100
    },

      {id: 105,
     nome: "Ultrassom",
     preco: 140
    }
]

async function buscarServicos(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const serviço = serviços.find(serviço => serviço.id === id);
 

            if(serviços){
                resolve(serviço);
            }
            else{
                reject("Serviço não encontrado");
            }

        }, 1000)

    })
}


module.exports = {
    buscarServicos
};