let nota1 = 50;
let nota2 = 60;
let nota3 = 100;
let media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
let passou;

if (media < 60){
    passou = 'Reprovado';
}
else if (media >= 60 && media <= 100){
    passou = 'Aprovado';
}
else {
    console.log('Valor errado!!')
}
console.log(passou);

switch (passou) {
    case 'Aprovado':
        console.log("O aluno foi", passou , "com média", media,".");
        break;
    case 'Reprovado':
        console.log("O aluno foi", passou , "com média", media,".");
        break;
    default:
        console.log("ERRO!!");
}