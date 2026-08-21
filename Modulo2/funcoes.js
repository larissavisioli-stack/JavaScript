// function quandoClicarNoBotao(){
//     console.log("Obrigado por comprar em nossa loja");
// }

// //invocacao da função
// quandoClicarNoBotao();

// function exibirmensagem(){
//     console.log("Bebam água");
// }
// exibirmensagem();

// //Mais simples de tudo (parametros)
// //---------------------------------------

// function somar(){
//     const resultado = 8 + 3;
//     console.log(resultado);
// }
// somar();

//----- Reutilizável

function somar(numero1, numero2){
    return(numero1 + numero2);
}
// somar(8, 3);
// somar(10, 20);
// somar(128, 256);

// const resultado = somar(8, 3);

// if(resultado >= 11){
// console.log("senai é massa");
// }

// else{
//     console.log("ainda assim é massa");
// }

/* console.log() como mostrar o resultado em uma tela 

return é como entregar o resultado para outra parte do programa utilizar
*/




function calcularDesconto(valor, desconto){
    return valor - desconto;
}

let valorFinal = calcularDesconto(100, 20);
console.log(valorFinal);
//Imposto sobre o produto 
const valorImposto = valorFinal * 0.04;
console.log("Valor tributário:" + valorImposto);

//regra cashBack
if(valorFinal > 50){
    const cashBack = valorFinal * 0.1;
    console.log("Valor do cashBack: " + cashBack)
}

/*  Regra de Parcelamento 

    R$ 100 já começa a parcelar + juros 2% do total

    Para ser sem juros compras acima de R$399

    o limite é de 6 parcelas.
*/
function parcelamento(valorFinal){

if(valorFinal > 399){
    //compras acima de 399: sem juros
    const valorParcelado = valorFinal / 6;
    console.log("O valor das parcelas em 6x sem juros: R$" + valorParcelado);
}

else if( valorFinal >= 100){
    //compras entre 100 e 399: com 2% de juros no total
    const valorParcelado = (valorFinal * 1.02) /6;
    console.log("O valor das parcelas em 6x com juros: R$" + valorParcelado)
}

else{
    // compras abaixo de 100: não parcela
    console.log("O valor não atinge o mínimo de R$100 para parcelamento")
}

}
 parcelamento();

    