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