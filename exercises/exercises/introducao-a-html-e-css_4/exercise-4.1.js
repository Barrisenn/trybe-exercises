// Exercício 1

let a = 17;
let b = 22;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(2 ** 5);

// Exercício 2

let num1 = 50;
let num2 = 48;

if(num1 > num2) {
    console.log(num1);
}else{
    console.log(num2);
}

// Exercício 3

let num1 = 10;
let num2 = 11;
let num3 = 15;

if(num1 > num2 && num1 > num3) {
    console.log(num1);
}else if(num2 > num1 && num2 > num3) {
    console.log(num2);
}else{
    console.log(num3);
}

// Exercício 4

let numero = -5;

if(numero > 0) {
    console.log("Positive");
}else if(numero == 0) {
    console.log("Zero");
}else{
    console.log("Negative");
}

// Exercício 5

let ang1 = 60;
let ang2 = 80;
let ang3 = 30;

if(ang1 + ang2 + ang3 == 180) {
    console.log(true);
}else{
    console.log(false);
}

// Exercício 6

let chessMoves = "QUEEN";

switch(chessMoves.toLowerCase()) {
    case "bishop":
        console.log("Diagonals");
        break;

    case "king":
        console.log("Any direction in a square");
        break;
    
    case "queen":
        console.log("Any direction any number of squares");
        break;

    case "rook":
        console.log("Horizontals and verticals any number of squares");
        break;

    default:
        console.log("Não tenho ideia do que faz essa peça!")
}

// Exercício 7

let percentual = 47;

if(percentual >= 90 && percentual <= 100) {
    console.log("A");
}else if(percentual >= 80 && percentual < 90) {
    console.log("B");
}else if(percentual >= 70 && percentual < 80) {
    console.log("C");
}else if(percentual >= 60 && percentual < 70) {
    console.log("D");
}else if(percentual >= 50 && percentual < 60) {
    console.log("E");
}else if(percentual < 50) {
    console.log("F");
}else if(percentual < 0) {
    console.log("Do chão não passa!");
}else if(percentual > 100) {
    console.log("Ninguém é perfeito assim!");
}else{
    console.log("Erro");
}

// Exercício 8

let num1 = 10;
let num2 = 7;
let num3 = 17;

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
}else{
    console.log(false);
}

// Exercício 9

let num1 = 10;
let num2 = 8;
let num3 = 1;

if(num1 % 2 == 0 && num2 % 2 == 0 && num3 %2 == 0) {
    console.log(false);
}else{
    console.log(true);
}

// Exercício 10

let valorCusto = 0;
let valorVenda = 1500;

if(valorCusto == 0 || valorVenda == 0) {
    console.log("ERRO");
}else{
    let valorCustoTotal = valorCusto + (valorCusto / 5);
    let lucro = valorVenda - valorCustoTotal;
    let milProdutos = lucro * 1000;
    console.log("O lucro obtido ao vender mil produtos é de " + milProdutos + " reais!");
}

// Exercício 11

let salarioBruto = 3500;
let salarioInss;
let salarioLiquido;

if(salarioBruto <= 1556.94) {
    salarioInss = salarioBruto - (salarioBruto / 100 * 8);
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioInss = salarioBruto - (salarioBruto / 100 * 9);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioInss = salarioBruto - (salarioBruto / 100 * 11);
}else if(salarioBruto > 5189.82) {
    salarioInss = salarioBruto - 570.88;
}else{
    console.log("ERRO");
}

if(salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    salarioLiquido = salarioInss - (salarioInss / 100 * 7.5 - 142.80);
}else if(salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    salarioLiquido = salarioInss - (salarioInss / 100 * 15 - 354.80);
}else if(salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    salarioLiquido = salarioInss - (salarioInss / 100 * 22.5 - 636.13);
}else if(salarioInss > 4664.68) {
    salarioLiquido = salarioInss - (salarioInss / 100 * 27.5 - 869.36);
}else{
    salarioLiquido = salarioInss;
}
console.log(salarioLiquido);