//PARSE
//STRINFY
//-------------------------------

//criar arquivo 

const fs = require("fs/promises");


async function criarArquivo() {

    const livros = [
        {
            id: 1,
            titulo: "Verity",
            autor: "Colleen Hoover"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K Rowlling"
        }

    ];

    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo criado com sucesso!");
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Listar livros
async function listarLivros() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar para objeto
    const livros = JSON.parse(dados);

    //exibir no console (no futuro sera seu site)

    console.log(livros);
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Adicionar livro
async function adicionarLivros() {
    //ler o arquivo

    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar(parse)

    const livros = JSON.parse(dados);

    //add livro (push)

    livros.push({

        id: 3,
        titulo: "Jantar Secreto",
        autor: "Rafael Montes"
    });

    //retransformar em json

    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //"Livro adicionado com sucesso!"

    console.log("Livro adicionado com sucesso!");
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


//Alterar livros

async function alterarLivro(id) {

    // Ler o arquivo

    const dados = await fs.readFile("livros.json", "utf-8");

    // Transformar o arquio JSON --> 

    const livros = JSON.parse(dados);

    // Descobrir o livro

    const livro = livros.find((livro) => livro.id === id);

    //logica - se não existir 
    // ! => é com negação, como um false

    if (!livro) {
        console.log("Livro não encontrado")
        return
    }

    // alterar o livro
    livro.autor = "Larissa Visioli";


    //transformar em json
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //falar que deu certo
    console.log("Livro alterado com sucesso!")

}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Deletar

async function deletarLivro(id){


//Ler arquivo 

 const dados = await fs.readFile("livros.json", "utf-8");


//Transformar o arquivo 

 const livros = JSON.parse(dados);

//Logica não - msg

if(!livros){
    console.log("Lista de livros não encontrado");
    return;
}


// Procurar o arquivo a ser deletado - Deleta os dados do livro

const livrosAtualizados = livros.filter((livro) => livro.id !== id);

//Retransformar 

 await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));


//Msg

console.log("Livro deletado com sucesso")

}


//Função executar 
async function executar() {

    await criarArquivo();

    await listarLivros();

    await adicionarLivros();

    await alterarLivro(3);
    
    await deletarLivro(2);
}
executar();