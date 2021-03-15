function verificaPalindromo(palavra) {
    console.log(palavra == palavra.split("").reverse().join(""))
    
}
verificaPalindromo("arar")

function maiorIndice(array) {
    let resultado = 0;
    for (let index = 0; index <= array.length; index++){
        if (array[index] > array[resultado]) {
            resultado = index;
        }
    }
return resultado
}
 console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

function menorIndice(array) {
    let resultado = 0;
    for (let index = 0; index <= array.length; index++){
        if (array[index] < array[resultado]) {
            resultado = index;
        }
    }
return resultado
}
 console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

function contaLetra (palavra) {
    let contagem=0;
    for (let index = 0 ; index < palavra.length; index++) {
        palavra1 = palavra[index];
        palavra2 = palavra[contagem];
        if (palavra1.length > palavra2.length){
            contagem = index;
        }
    }
    console.log (palavra[contagem])
    return contagem
}
contaLetra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

function repetidos (array) {
    let contagem = { };
    let maior = 0;
    let chave;

    for (itens of array) {
        contagem[itens]=0;
    }

    for (itens of array){
        contagem[itens]++
    }

    for (itens of array){
        
        if (contagem[itens]>maior){
            maior = contagem[itens];
            chave = itens
        }
    }
    
    
    // console.log(contagem);
    console.log('O valor que mais se repete é o '+ chave)

}

repetidos([2, 3, 2, 5, 8, 2, 3]);

function somatorio (n){
    let soma =0;
    for (index = 0; index <= n ; index++) {
        soma = soma + index;
    }
    return soma
}

console.log(somatorio(5));

function verificaFimpalavra (palavra, fim){
    palavraInvertida = palavra.split("").reverse();
    fimInvertido = fim.split("").reverse();
    let contador = 0;
    for (index=0; index<=fimInvertido.length; index++){
        if (fimInvertido[index]==palavraInvertida[index]){
            contador++;
        }
    }
    console.log(contador == fimInvertido.length)

}

verificaFimpalavra("trybe", "be");
verificaFimpalavra("joaofernando", "fernan");