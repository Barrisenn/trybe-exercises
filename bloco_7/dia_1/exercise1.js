function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = "Não utilização fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo utilização !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não utilização fora meu escopo (else)";
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => array.sort((a, b) => a - b);
console.log(`Os números ${sortArray(oddsAndEvens)} ordenados de forma crescente!`);