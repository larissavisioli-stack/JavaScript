// construir um array com pedidios 

const pedidos = [
    {
        id: 1,
        usuarioId: 1,
        produtoId: 1,
        quantidade: 2
    },


    {
        id: 2,
        usuarioId: 1,
        produtoId: 2,
        quantidade: 1
    },


    {
        id: 3,
        usuarioId: 3,
        produtoId: 3,
        quantidade: 1
    }

]

//função buscarPedido(id)

async function buscarPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const pedidosUsuario = pedidos.filter(pedido => pedido.usuarioId === usuarioId)

            if (pedidosUsuario.length > 0) {
                resolve(pedidosUsuario);
            }
            else {
                reject("Não existem pedidos para esse cliente")
            }

        }, 2000)
    })
}

//Export

module.exports = {
    buscarPedidos
};