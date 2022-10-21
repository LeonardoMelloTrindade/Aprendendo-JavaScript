function FizzBuzz(input){

    if ((input % 3 == 0) && (input % 5 ==0)) {
        return "FizzBuzz";
    }
    else if (input % 3 == 0) {
        return "Fizz";
    } 

    else if (input % 5 == 0) {
        return "Buzz";
    }

    else if (typeof input !== 'num') {
        return "Não é um número.";
    }

    else {
        return input;
    }

}

let teste = FizzBuzz(131);
console.log(teste);