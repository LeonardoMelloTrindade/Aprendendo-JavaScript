function ComparandoNum(valor1, valor2){
    if (valor1 > valor2) {
        return valor1;
    }
    else if (valor2 > valor1) {
        return valor2;
    }
    else {
        return valor1;
    } 

}

let numero = ComparandoNum(10, 20);
console.log(numero);