// exports e imports

const fs = require("fs/promises")
const { buscarUsuario } = require("./usuarios");
const { buscarProdutos } = require("./produtos");
const { buscarPedidos } = require("./pedidos");


//função
async function fecharConta(usuarioId) {

    try {
        // Usuário

        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario)


        // Produto

        // console.log("Buscando produto...")
        // const produto = await buscarProdutos(usuarioId);
        // console.log(produto)


        // Pedido

        console.log("Buscando pedidos...")
        // const pedido = await buscarPedidos(usuarioId);
        // console.log(pedido)

        const pedidos = await buscarPedidos(usuario.id);

        
        console.log("Calculando a comanda...");
        //total geral
        let totalGeral = 0


        //array para nossos itens
        const itensConta = []


        //varrer item
        //varrer os itens(produtos) e add(push) os itens no itens conta

        //estrutura do comando
        for (const pedido of pedidos) {
            const produto = await buscarProdutos(pedido.produtoId);
            const subtotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subtotal: subtotal
            });

            totalGeral += subtotal
        }

        //Construir nosso arquivo

        const comanda = {
            estabelecimento: "Cabana",
            cliente: {
                id: usuario.id,
                nome: usuario.nome,
            },
            itens: itensConta,
            totalPagar: totalGeral
        }

        await fs.writeFile("comandaCliente.json", JSON.stringify(comanda, null, 2), "utf-8");

    } catch (erro) {
        console.error("Erro ao fechar a conta", erro)
    }
}
fecharConta(1);

