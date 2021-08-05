const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === "cafezinho" || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado por me atender :D!")
} else {
    console.log("Ei, eu não pedi isso!")
}
console.log(" ");

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(" ");

const weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D!");
} else {
    console.log("FINALMENTE, descando merecido UwU!");
}

console.log(" ");

const gym = "segunda-feira"

if(gym === "segunda-feira" || gym ==="quarta-feira") {
    console.log("Não vou a academia!")
} else if (gym === "terça-feira" || gym === "quinta-feira" || gym === "sexta-feira") {
    console.log("Oba, tenho academia!")
}else if (gym === "sabado" || gym === "domingo") {
    console.log("Bora Descançar!!!!")
}