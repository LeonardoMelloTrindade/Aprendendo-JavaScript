let numUsu = Number(prompt("Tente acertar o número!! \nDigite um número: "));
let numBot = parseInt(Math.random() * 5); //GERAR UM NÚMERO ALEATORIO DE 1 A 5
let resultado = numUsu == numBot ? "Você acertou" : "Você errou";
console.log(resultado);
console.log("Valor do usuário:", numUsu, "\nValor do Bot:", numBot);