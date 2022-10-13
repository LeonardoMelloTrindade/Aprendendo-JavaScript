let calcTabu = Number(prompt("1 = Tabuada  \n2 = Calculadora"));

switch (calcTabu) {
//TABUADA
    case 1:
        let valor = Number(prompt("Digite o valor: "));

        for (let i = 1; i < 1; i++){
            console.log(valor, "*", i, "=", valor * i);
        }
    break;
    //CALCULADORA
    case 2:
        let operacaoCalc = Number(prompt("Deseja que tipo de operação? \n1 = Adição \n2 = Subtração \n3 = Multiplicação \n4 = Divisão"));
        let valor1 = Number(prompt("Digite o 1° valor: "));
        let valor2 = Number(prompt("Digite o 2° valor: "));
        switch (operacao){
            case 1:
                let adicao = valor1 + valor2;
                console.log(valor1, "+", valor2, "=", adicao);
                break;
            case 2:
                let subtracao = valor1 - valor2;
                console.log(valor1, "-", valor2, "=", subtracao);
                break;
            case 3:
                let multiplicacao = valor1 * valor2;
                console.log(valor1, "x", valor2, "=", multiplicacao);
                break;
            case 4:
                let divisao = valor1 / valor2;
                console.log(valor1, "/", valor2, "=", divisao);
                break;
            default:
                console.log("Digitou errado!!");
                }
            break;

            default:
                console.log("Digitou errado, digite novamente.")
        }
