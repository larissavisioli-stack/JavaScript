// exports e imports

const fs = require("fs/promises")
const { buscarAtendimento } = require("./atendimento");
const { buscarServicos } = require("./servicos");

async function fecharConta(atendimentoId) {

    try {
        // BUSCAR ATENDIMENTO

        console.log("Buscando atendimento...")
        const atendimento = await buscarAtendimento(atendimentoId);
        console.log(atendimento)


        // SERVIÇOS

        // console.log("Buscando serviço...")

        // console.log(atendimento.serviços);
        // //Para cada serviço dentro de serviços:
        // //Buscar o serviço específico pelo id
        // // Multiplicar o valor dele pela quantidade

        // const serviço = await buscarServicos(atendimentoId);
        // console.log(serviço)

        // const servicos = await buscarServicos(servico.servicosId);


        //FECHANDO A CONTA

        console.log("Calculando a comanda...");
        let totalGeral = 0

        const itensConta = []

        for (const servico of atendimento.servicos) {
    
            const detalheServico = await buscarServicos(servico.servicoId);

            const subtotal = detalheServico.preco * servico.quantidade;


            itensConta.push({
                item: detalheServico.nome ,
                quantidade: servico.quantidade,
                preco: detalheServico.preco,
                subtotal: subtotal
            });

            totalGeral += subtotal
        }
    
      //construindo a comanda

        const comanda = {
            estabelecimento: "Clínica Veterinária",
            cliente: {
                id: atendimento.id,
                nome: atendimento.nome
            },
            itens: itensConta,
            totalPagar: totalGeral
        }

        console.log(comanda);
         
        await fs.writeFile("comandaCliente.json", JSON.stringify(comanda, null, 2), "utf-8");

    } catch (erro) {
        console.error("Erro ao fechar a conta", erro)
    }
}
fecharConta(3);




