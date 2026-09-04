console.log("----------- ATIVIDADE 1 -----------")

console.log("--- Apenas o título")

const filme ={
    titulo: "Juntos e Misturados",
    ano: 2016,
    genero: "Comédia Romântica",
    
    apresentar: function(){
        //this
        console.log(filme.titulo + " é o melhor filme de comédia romântica");
        console.log(`${this.titulo} é o melhor filme de comédia romântica`);
}
};

//--- Mostrar o título ---

console.log(filme.titulo);

//Alterar o ano

filme.ano = 2014;

filme.diretor =  "Frank Coraci";

//remover o gênero

delete filme.genero;

console.log("--- Objeto Final ---")

console.log(filme);

/*
- mostrar o título
-alterar o ano
-adicionar diretor
- remover gênero
-mostrar o objeto final
*/

console.log("----- Função -----")

filme.apresentar();