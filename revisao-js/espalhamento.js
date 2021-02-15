console.log(Math.min(20, 3, 47, 33, 41)) // Retornar o menor número da lista
console.log(Math.max(20, 3, 47, 33, 41)) // Retornar o maior número da lista

let numeros = [20, 3, 47, 33, 41]

// Fazendo o espalhamento do vetor para conseguir os parâmetros soltos

console.log(Math.min(...numeros)) // Retornar o menor número da lista
console.log(Math.max(...numeros)) // Retornar o maior número da lista

// Colocando um vetor dentro de outro sem espalhar fica o vetor dentro de outro mesmo
let maisNumeros = [19, 7, 38, numeros, 0, -5]

console.log(maisNumeros);

// para colocar os dados de um vetor dentro de outro para se ter apenas um vetor devemos espalhar ele 
 maisNumeros = [19, 7, 38, ...numeros, 0, -5]

console.log(maisNumeros);
console.log("*******************************************")

// Usando espalhamento em parâmetros de função (parâmetro de resto)

function somaTudo(...nuns) { //"..." significa: não há quantidade fica de parâmetros 
    let soma = 0
    // O parâmetro de resto dentro de uma função é interpretado com um vetor

    for (let n of nuns) soma += n
    return soma
}

console.log(somaTudo(14, 56, 78, 0, -4, 41)) // Quantidade de números aleatório
console.log(somaTudo(25, -7, 14))
console.log("*******************************************")

// Usando parâmetro de resto após um argumento obrigatório

function calcular(oper, ...nuns) {
    let res;

    switch (oper) {
        case '+':
           res = 0
           for(let n of nuns) res += n
           break
        case '*':
            res = 1 // Elemento neutro na multiplicação
            for(let n of nuns) res *= n
            break
    }

    return res
}

console.log(calcular('+', 15, 19, 12, 32, -7, 6))
console.log(calcular('*', 15, 19, 12, 32, -7, 6))

console.log("*******************************************")
console.log(somaTudo(...maisNumeros))
console.log(calcular('*', ...maisNumeros))