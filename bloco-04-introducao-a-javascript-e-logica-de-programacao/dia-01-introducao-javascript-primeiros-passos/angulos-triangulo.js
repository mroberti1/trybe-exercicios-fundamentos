// Exercéicio 5
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let degreeAngleA = 60;
let degreeAngleB = 60;
let degreeAngleC = 60;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: Ângulo Invâlido, número negativo!")
}

