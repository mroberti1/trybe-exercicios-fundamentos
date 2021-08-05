// && - And
// || - Ou
// ! - Não

// const comida = 'Pão na chapa';
// const bebida = 'cafézinho';

// if(bebida === 'cafézinho' && comida === 'Pão na chapa') {
//     console.log('Muito obrigado pela refeição!');

// } else {
//     console.log('Acho que houve um engano com meu pedido!');
// } 

// console.log();

// const conditionOne = true;
// const conditioneTwo = false;

// console.log(conditionOne && conditioneTwo);

// console.log();

// // Lista de Compras
// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijão = true;

// const listaDeCompras = cenouras && leite && arroz && feijão;
// console.log(listaDeCompras)

// console.log();

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log();

const currentHour = 11;
const message = '';

if(currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour <= 22) {
    console.log("Rango da noite, vamos jantar :D")
} else if (currentHour >= 14 && currentHour<= 18) {
    console.log("Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >= 11 && currentHour <= 14) {
    console,console.log("Hora do almoço!!!");
} else if(currentHour >= 4 && currentHour <= 11) {
    console.log("Hmmm, cheiro de café recém passado")
} else {
    console.log ("Você está fora dos horários das refeições!")
}