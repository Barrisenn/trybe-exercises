const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));

console.log(fatorial(4));

const longestWord = (phrase) => {
  const sortedPhrase = phrase.split(" ").sort((a, b) => a.length - b.length);
  return sortedPhrase[sortedPhrase.length - 1];
};

console.log(longestWord("Minha Mãe foi comprar seus dois litros de COCA-COLA e ainda não retornou"));