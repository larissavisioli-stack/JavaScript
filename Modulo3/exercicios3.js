const produtos= [
    { nome: "Produto 1", disponivel: true},
    { nome: "Produto 2", disponivel: false},
    { nome: "Produto 3", disponivel: true},
    { nome: "Produto 4", disponivel: true}
];


console.log("---------------- FOR OF ----------------")

const produtosDisponiveis = [];

for(const produto of produtos){
    if(produto.disponivel){
        produtosDisponiveis.push(produto.nome);
    }
}
console.log(produtosDisponiveis);

console.log("__________________________________________________")


console.log("---------------- MAP & FILTER ----------------")

const produtosDisponiveisMap = produtos
.filter((produto) => produto.disponivel)
.map((produto) => produto.nome);

console.log(produtosDisponiveisMap);






