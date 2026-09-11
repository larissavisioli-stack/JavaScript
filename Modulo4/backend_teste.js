const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function buscarUsuario(id) {
    await esperar(2000);
    return { 
        id: id, //o id que a gnt quiser
        nome: "Robyn Rihanna", 
        email: "riri@email.com" 
    };
}

async function buscarPedidos(usuarioId) {
    await esperar(3000);
    const todospedidos = [ 
        {id: 1, produto: "X-Tudo"}, 
        {id: 2, produto: "Coca-Cola"}, 
        {id: 3, produto: "X-Catupiry"} 
    ]; 

    return todospedidos.filter(pedido => pedido.id === usuarioId);

}

async function executar() {
    try {
        console.log("Iniciando simulação...");
        
        console.log("Buscando usuário...");
        const usuario = await buscarUsuario(1);
        console.log("Usuário encontrado:", usuario);
    
        //buscando pedidos

        console.log("Buscando pedidos pelo id...", usuario.id);
        const pedidos = await buscarPedidos(usuario.id);
        console.log("Os pedidos encontrados foram:", pedidos);
    
    } catch(erro) {
        console.error("Deu errado:", erro);
    }
}

executar();
