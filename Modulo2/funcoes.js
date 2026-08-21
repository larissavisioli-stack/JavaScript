function quandoClicarNoBotao(){
    console.log("Obrigado por comprar em nossa loja");
}

//invocacao da função
quandoClicarNoBotao();

function exibirmensagem(){
    console.log("Bebam água");
}
exibirmensagem();

//Mais simples de tudo (parametros)
//---------------------------------------

function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}
somar();

//----- Reutilizável

function somar(numero1, numero2){
    console.log (numero1 + numero2);
}
somar(8, 3);
