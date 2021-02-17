export function somaVet(vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

export function quadradoVet(vet) {
    // cria um novo vetor cujos elementos equivale ao quadrado dos elementos do vetor original
    let res = []
    for(let n of vet) res.push(n**2)
    return res
}