//Switch -- case

//A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .

// let trafficLight = "verde";
// switch(trafficLight) {
//     case "vermelho":
//         console.log("Pare!");
//         break;
//     case "amarelo":
//         console.log("Atenção!");
//         break;
//     case "verde":
//         console.log("Siga!");
//         break;
//     default:
//         console.log("Valor não identificado!")
// }
// console.log();
// console.log();

let candidata = "Aprovada";
switch(candidata) {
    case "Aprovada":
        console.log("Aprovada!");
        break;
    case "Lista":
        console.log("Você foi para lista de espera!");
        break;
    case "Reprovada":
        console.log("Você foi reprovada!");
        break
    default:
        console.log("Não se Aplica!")
}