let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//exercicio 2

let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i]
}
console.log("A soma é " + soma)

//exercicio 3

let mediaAritimetica = soma / numbers.length;
console.log("A média entre os valores é " + mediaAritimetica)

//exercicio 4

if (mediaAritimetica > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

//exercicio 5

let maior = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (maior < numbers[i]) { 
        maior = numbers[i]
    }
}
console.log(`O maior número é ${maior}`)

//exercícío 6

let impar = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 1){
        impar++
    }
}
if (impar > 0) {
    console.log(`Quantidade de números ímpares: ${impar}`)
} else{
    console.log("Nenhum valor ímpar encontrado")
}

//exercicio 7

let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (menor > numbers[i]) { 
        menor = numbers[i]
    }
}
console.log(`O menor número é ${menor}`)

//exercicio 8

let numbers2 =[];

for (index = 1; index <= 25; index++) {
    numbers2.push(index)
}
console.log(`${numbers2}`)

//exercicio 9

let divisao = []
for (index = 0; index < 25; index++) {
    divisao.push((numbers2[index] / 2))
}
console.log(`${divisao}`)

//exercicio bônus 1

for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < index; index2++) {
      if (numbers[index] < numbers[index2]) {
        let reserva = numbers[index];
  
        numbers[index] = numbers[index2];
        numbers[index2] = reserva;
      }
    }
  }
console.log(`O array ordenado de forma crescente é: ${numbers}`)

//exerccicio bonus 2

for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < index; index2++) {
      if (numbers[index] > numbers[index2]) {
        let reserva = numbers[index2];
  
        numbers[index2] = numbers[index];
        numbers[index] = reserva;
      }
    }
  }
console.log(`O array ordenado de forma decrescente é: ${numbers}`)

//exercicio bonus 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let multiplicado = []

for (let index = 0; index < numbers.length -1; index++) {
          multiplicado.push((numbers[index]*numbers[index +1]))
  }
multiplicado.push((numbers[(numbers.length-1)]*2))

console.log(numbers.length)
console.log(`O array multiplicado é: ${multiplicado}`)