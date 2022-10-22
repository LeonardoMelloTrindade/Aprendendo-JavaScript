function somarMultiplos(maximo) {
    let multi3 = 0;
    let multi5 = 0;
    for (let i = 1; i <= maximo; i++) {

        if (i % 3 == 0) {
            multi3 += i;
            console.log(`O valor ${multi3} foi somado ao multiplo de 3.`);
        }

        if (i % 5 == 0) {
            multi5 += i;
            console.log(`O valor ${multi5} foi somado ao multiplo de 5.`); 
        }
    }

    console.log(`A soma dos multiplos de 3 e 5 é ${multi3 + multi5}.`);
}

somarMultiplos(10);