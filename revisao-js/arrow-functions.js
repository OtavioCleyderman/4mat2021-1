// No JS existe a função Math.pow() que faz isso, elevar ao quadrado

function quadrado (x) {
    return x * x 
}


/*
Caracteristicas da função acima:
Tem apenas um parâmetro e tem apenas uma linha de código

*/

console.log(quadrado(7))

/*
Uma função nessas caracteristicas podem ser escritas de forma abreviada da seguinte forma, com arrow function

1) A palavra function foi substituida pelo sinal "=>"
2) Os parâmetros em torno do parâmetro foram omitidos 
3) As chaves foram omitidas 
4) A palavra returna também foi omitida
*/ 
let quadrado2 = x => x * x;
console.log(quadrado2(7))

console.log("**********************************************")

// Função com DOIS parãmetros
function potencia(b, e) { // b = base, e = expoente
    return b ** e
}
console.log(potencia(2, 5))

// No formato arrow function, quando há mais de um parâmeto os parênteses retornan

let potencia2 = (b, e) => b ** e

console.log(potencia2(2, 5))

console.log("**********************************************")

// função sem parâmetros
function megasena() {
    // Essa função retorna um número aleatório entre 1 e 60
    // Math.random() -> retorna um número aleatório entre 0 (inclucive) e 1 (exclucive)
    // * 60 -> ajusta a faixa de valores para entre 0 e 59
    // + 1 -> Ajusta a faixa de valores para entre 1 e 60
    // Math.floor() -> retira a parte fracionária (casas decimais) do resultado

    return Math.floor(Math.random()* 60 + 1)

}

// 6 números de um jogo da megasena 
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

console.log("**********************************************")

/* Em arrow functions sem parâmetros, é necessário deixar um par vazio de parênteses 
para marcar o lugar dos parênteses */
const megasena2 = () =>  Math.floor(Math.random()* 60 + 1)

// 6 números de um jogo da megasena 
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

console.log("**********************************************")

// Função com mais de uma linha de código no corpo

function somaTudo(...nuns) { //"..." significa: não há quantidade fica de parâmetros 
    let soma = 0
    // O parâmetro de resto dentro de uma função é interpretado com um vetor
    for (let n of nuns) soma += n
    return soma
}

console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9)) 

/*
Em arrow function com mais de uma linha de código no corpo, as chaves retornam e também
é necessário voltar a usar a palavra return para retornar um valor
*/ 

const somaTudo2 = (...nuns) => {
    let soma = 0
    // O parâmetro de resto dentro de uma função é interpretado com um vetor
    for (let n of nuns) soma += n
    return soma
} 
console.log(somaTudo2(1, 2, 3, 4, 5, 6, 7, 8, 9)) 
console.log("*******************************************")

/*
Conclusão: arrow functions são ideais para quando uma função tem apenas uma 
ou poucas linhas de código no corpo.
*/