const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function buscarUsuario() {
    await esperar(2000);
    return {
        id: id, //o id que a gnt manda executar
        nome: "Robbyn Rhianna",
        email: "riri@gmail.com"
    };
}

async function BuscarPedidos() {
    await esperar(2000);
    return [
        {id: 1, produto: "X-tudo"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "X-Catupiry"}
    ];
}

async function executar() { 
    try {
        console.log("Iniciando execução...");
        console.log("Buscando Usuário...");
        const usuario = await buscarUsuario(1); 
        console.log("Usuário encontrado:", usuario);

        //Bucar pedidos
        console.log("Buscando Pedidos...");
        const pedidos = await BuscarPedidos();
        console.log("Pedido encontrado...", pedidos);

    }
    catch(erro) {
        console.log("Deu errado"); 
    }
}

executar();
