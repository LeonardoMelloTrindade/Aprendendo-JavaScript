nota1 = 50;
nota2 = 10;
nota3 = 20;
media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

if (media < 60) {
    console.log("Você foi reprovado com média", media, ".")
}
else if ((media >= 60) &&(media < 80)) {
    console.log("Você foi aprovado com média", media, ".")
}
else if ((media >= 80) && (media < 100)) {
    console.log("Você foi aprovado com média", media, ", parabéns pelo seu esforço!!")
}
else if (media == 100) {
    console.log("Você foi aprovado com nota máxima (100). QUE INCRÍVEL!!!!")
}
else {
    console.log("Média inválida.")
}