let filme = {
    titulo: "Poderoso Chefão",
    ano: 1972,
    diretor: "Francis Ford Coppola",
    personagem: "Vito Corleone"
}

function exibirObj(obj) {
    for (propriedade in obj){
        if (typeof obj[propriedade] === '');
            console.log(propriedade, obj[propriedade]);
    }
}

exibirObj(filme);