// Parte I - Exercício 1

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
console.log("Bem vinda, " + info.personagem);

// Exercício 2

info.recorrente = "Sim";
console.log(info);

// Exercício 3

for(let properties in info) {
    console.log(properties);
}

// Exercício 4

for(let properties in info) {
    console.log(info[properties]);
}

// Exercício 5

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };
  
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };
  
  for (let properties in info) {
    if (
      info[properties] === info.recorrente &&
      info[properties] === "Sim" &&
      info2[properties] === "Sim"
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(info[properties] + " e " + info2[properties]);
    }
  }

// Parte II - Exercício 1

function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }

// Exercício 2

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }

// Exercício 3

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }

// Exercício 4

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }

// Exercício 5

function maisRepetido(numeros) {
    let num = {};
  
    for (let i = 0; i < numeros.length; i += 1) {
      let valor = numeros[i];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }

// Exercício 6

function somaTodosNumeros(numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index++) {
      total = total + index;
    }
    return total;
  }

// Exercício 7

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle = true;
    for (let i = 0; i < fimPalavra.length; i++) {
      if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
        controle = false;
      }
    }
    return controle;
  }