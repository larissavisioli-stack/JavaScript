const atendimentos = [
    {
        id: 1,
        nome: "Isa",
        raca: "American Shorthair",
        tutor: "Larissa Visioli",
        servicos: [
            { servicoId: 102, quantidade: 1 },
            { servicoId: 104, quantidade: 2 }
        ]

    },

    {
        id: 2,
        nome: "Thor",
        raca: "Bulldog",
        tutor: "Renata",
        servicos: [
            { servicoId: 100, quantidade: 1 },
            { servicoId: 103, quantidade: 2 }
        ]
    },


    {
        id: 3,
        nome: "Nina",
        raca: "Pit Bull",
        tutor: "Júnior",
        servicos: [
            { servicoId: 101, quantidade: 1 },
            { servicoId: 104, quantidade: 1 }
        ]
    }
]


async function buscarAtendimento(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const atendimento = atendimentos.find(atendimento => atendimento.id === id);

            if (atendimento) {
                resolve(atendimento);
            }
            else {
                reject("Atendimento não encontrado");
            }

        }, 1500)

    })
}

module.exports = {
    buscarAtendimento
};


