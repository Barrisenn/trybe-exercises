// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma);

// Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    media = (soma / numbers.length);
}
console.log(media);

// Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    media = (soma / numbers.length);
}

if(media > 20) {
    console.log("Valor maior que 20")
}else{
    console.log("Valor menor ou igual a 20")
}

// Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}
console.log(maiorValor);

// Exercício 6

let numbers = [3, 8, 7, 16, 71, 8, 103, 2, 33, 22];
let resultado = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 == 1) {
        resultado += 1;
    }
}
if(resultado === 0) {
    console.log("Não há ímpares");
}else{
    console.log(resultado);
}

// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 10000;

for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menorValor) {
    menorValor = numbers[index];
    }
}
console.log(menorValor);

// Exercício 8

let numbers = [];

for(index = 1; index < 26; index +=1) {
    numbers.push(index);
}
console.log(numbers);

// Exercício 9

for(index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index] / 2);
}

// Bônus 1