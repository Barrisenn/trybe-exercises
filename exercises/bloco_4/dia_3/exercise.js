//exercício 1

let n = 5;
console.log("Exercício 1")
for (let index = 0; index < n; index++) {
    let linha = ""
    for (let index2 = 0; index2 < n; index2++) {
        linha = linha + "*"
    }
    console.log(linha)
}

//exercicio 2

n = 5;
console.log("Exercício 2")

for (let index = 0; index < n; index++) {
    let linha = ""
    for (let index2 = 0; index2 <=index; index2++) {
        linha = linha + "*"
    }
    console.log(linha)
}


//exercício 3

n = 5;
console.log("Exercício 3")
for (let index = 1; index <= n; index++) {
    let linha = ""
    for (let index2 = 1; index2 <=n; index2++) {
        if (index + index2 <= n){
            linha = linha +" "
        } else {
        linha = linha + "*"
        }
    }
    console.log(linha)
}

// exercicio 4

n = 5;
let meio = (n + 1)/2;
console.log(meio)
let esquerda = meio;
let direita = meio;
console.log("Exercício 4")
for (let index = 0; index <= meio; index++) {
    let linha = ""
    for (let index2 = 1; index2 <= n; index2++) {
        if ((index2 > (esquerda)) && (index2 < (direita))) {
        linha = linha + "*"
        } else 
        linha = linha + " "
    }
console.log(linha)
esquerda = esquerda -1;
direita = direita +1;


}

//exercício bonus 5

n = 9;
meio = (n + 1)/2;
console.log(meio)
esquerda = meio;
direita = meio;
console.log("Exercício 5")
for (let index = 0; index <= meio; index++) {
    let linha = ""
    for (let index2 = 1; index2 <= n; index2++) {
        if ((index2 == (esquerda)) || (index2 == (direita)) || (index == meio))  {
        linha = linha + "*"
        } 
        else
        linha = linha + " "
    }
console.log(linha)
esquerda = esquerda -1;
direita = direita +1;
}

//exercicio bonus 6

let numero = 12;
let contador = 0;
for (let index =1; index <= numero; index++){
    if (numero%index == 0){
        contador++
    }
}

if (contador <= 2){
    console.log(`O número ${numero} é primo`)
} else {
    console.log(`O número ${numero} não é primo e possui ${contador} divisores`)
}